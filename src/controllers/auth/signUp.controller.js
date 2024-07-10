import Joi from "joi";
import signUpModel from "../../models/auth/signUp.model.js";
import generateToken from "../../services/generateToken.js";
import sendMail from "../../services/sendMail.js";
import joiErrorMessages from "../../validations/joiErrorMessages.js";

export default async function signUpController(req, res, next) {
  try {
    const newUserSchema = Joi.object({
      username: Joi.string()
      .required()
      .messages(joiErrorMessages),
      email: Joi.string()
      .email()
      .required()
      .messages(joiErrorMessages),
      password: Joi.string()
      .min(8)
      .max(200)
      .required()
      .messages(joiErrorMessages),     
    });

    const { error, value } = newUserSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.details[0].message,
      });
    }

    const { username, email, password } = value;

    //Generar token aleatorio
    const token = generateToken();

    const { message } = await signUpModel(username, email, password, token);

    console.log(req.protocol);

    const emailSubject = "Confirma tu registro en Time Organizer.";

    //link para confirmar el registro
    const emailLink = `${req.protocol}://${req.get(
      "host"
    )}/users/confirm?token=${token}`;

    //cuerpo del mail
    const emailBody = `
          <!DOCTYPE html>
          <html lang="es">
          <body>
              <h2>¡Bienvenid@ ${username}!</h2>
              <h3>Gracias por registrarte en Time Organizer.</h3>
              <hr>
              <p>Haz click en el siguiente <a href="${emailLink}">enlace</a> para completar tu registro.</p>
          </body>
          </html>
        `;

    await sendMail(email, emailSubject, emailBody);

    return res.status(201).json({
      ok: true,
      message,
    });
    
  } catch (error) {
    console.log(error);
    next(error);
  }
}
