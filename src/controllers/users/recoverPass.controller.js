import randomstring from "randomstring";
import { passRecoverModel } from "../../models/users/in";
import sendMail from "../../services/sendMail.js";

const recoverPassController = async (req, res, next) =>{
  try{
    const { email } = req.body;

    const recoverPassCode = randomstring.generate(10);

    await passRecoverModel(email, recoverPassCode);

    const emailSubject = "Recuperación de contraseña en Time Organizer :)";

    const emailBody = `
      <!DOCTYPE html>
          <html lang="es">
          <body>
              <h4>Se ha solicitado la recuperación de contraseña para este email en Time Organizer.</h4> 
              <hr>
              <h4>Utiliza el siguiente código para crear una nueva contraseña: ${recoverPassCode}.</h4>
              <hr>
              <p>Si no has sido tú, por favor, ignora este email.</p>
          </body>
          </html>
    `;

    await sendMail(email, emailSubject, emailBody);

    res.send({
      status: "ok",
      message: "Se ha enviado un correo para la recuperación de la contraseña.",
    });
    
  } catch (error) {
    next(error);
  }
};

export default recoverPassController;
