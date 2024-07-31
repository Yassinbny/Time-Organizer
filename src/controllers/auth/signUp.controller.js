import { signUpModel } from "../../models/auth/index.js";
import generateToken from "../../services/generateToken.js";
import sendMail from "../../services/sendMail.js";
import validateSchema from "../../validations/validateSchema.js";
import { signUpSchema } from "../../validations/usersSchema.js";

export default async function signUpController(req, res, next) {
  try {
    const { username, email, password } = req.body;

    //Validar el body con Joi.
    await validateSchema(signUpSchema, req.body);

    //Generar token aleatorio.
    const signUpCode = generateToken();

    //Generar el correo.
    const emailSubject = "Confirma tu registro en Time Organizer.";

    //Link para confirmar el registro.
    const emailLink = `${req.protocol}://${req.get(
      "host"
    )}/users/confirm/${signUpCode}`;

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

    //Pasar al modelo la consulta con la DB.
    const { message } = await signUpModel(
      username,
      email,
      password,
      signUpCode
    );

    //Enviar el correo de registro.
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
