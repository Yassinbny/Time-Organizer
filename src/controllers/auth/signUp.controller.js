import signUpModel from "../../models/auth/signUp.model.js";
import generateToken from "../../services/generateToken.js";
import Joi from "joi";
import sendMail from "../../services/sendMail.js";

export default async function signUpController(req, res, next) {
  try {
    const newUserSchema = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),
      email: Joi.string().email().required(),
    });

    const { error, value } = newUserSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.details[0].message,
      });
    }

    const { username, email, password } = value;

    //Validar lo datos
    // if([username, email, password].includes("") || ([username, email, password]).includes(undefined)) {
    //     let error = new Error("Todos los campos son requeridos");
    //     error.status= 400;
    //     throw error;
    // }

    //Generar token aleatorio
    const token = generateToken();

    const { message } = await signUpModel(username, email, password, token);

    // const emailSubject = "Confirma tu registracion en Time Organizer";
    console.log(req.protocol);
    // const emailLink = `${req.protocol}://${req.get(
    //   "host"
    // )}/users/confirm?token=${token}`;
    const emailSubject = "Confirma tu registración en Time organizer";

    //link para confirmar la registración
    const emailLink = `${req.protocol}://${req.get(
      "host"
    )}/users/confirm?token=${token}`;

    //cuerpo del mail
    const emailBody = `
          <!DOCTYPE html>
          <html lang="es">
          <body>
              <h2>Bienvenid@ ${username}</h2>
              <h4>¡Gracias por registrate en Travel Journal</h4>
              <hr>
              <p>Haz click en el siguiente <a href="${emailLink}">enlace</a> para confirmar tu registración</p>
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
