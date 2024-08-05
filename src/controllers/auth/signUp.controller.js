import { signUpModel } from "../../models/auth/index.js";
import generateToken from "../../services/generateToken.js";
import sendMail from "../../services/sendMail.js";
import validateSchema from "../../validations/validateSchema.js";
import { signUpSchema } from "../../validations/usersSchema.js";
import { FRONTEND_URL } from "../../../env.js";


export default async function signUpController(req, res, next) {
  try {
    const { username, email, password } = req.body;
    
    // Validar el cuerpo de la solicitud con Joi.
    await validateSchema(signUpSchema, req.body);

    // Generar un token de confirmación único.
    const signUpCode = generateToken();

    // Crear el enlace de confirmación usando FRONTEND_URL.
    const emailLink = `${FRONTEND_URL}confirm/${signUpCode}`;

    // Guardar el usuario en la base de datos con el código de confirmación.
    const { ok, message } = await signUpModel(username, email, password, signUpCode);

    if (!ok) {
      return res.status(400).json({ ok: false, message });
    }

    // Crear el cuerpo del correo electrónico.
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
    const emailSubject = "Confirma tu registro en TimeOrganizer";

    // Enviar el correo electrónico con el enlace de confirmación.
    await sendMail(email, emailSubject, emailBody);

    return res.status(201).json({
      ok: true,
      message,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
}
