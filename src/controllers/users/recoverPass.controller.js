import randomstring from "randomstring";
import { passRecoverModel } from "../../models/users/index.js";
import sendMail from "../../services/sendMail.js";

const recoverPassController = async (req, res, next) => {
  try {
    const { email } = req.body;

    const recoverPassCode = randomstring.generate(10);

    await passRecoverModel(email, recoverPassCode);

    const emailSubject = "Recuperación de contraseña en Time Organizer :)";

    const emailBody = `
      <!DOCTYPE html>
          <html lang="es">
            <body style="font-family: Arial, sans-serif; margin: 20px; color: #333;">
              <h3>¡Hola!</h3>
                  <p>¿Olvidaste tu contraseña? ¡No hay problema! Hemos recibido una solicitud para recuperar la contraseña de tu cuenta en Time Organizer.</p>
                    <hr style="border: 1px solid #ddd; margin: 20px 0;">
                  <p>Para continuar, usa el siguiente código en la página a la que te hemos redirigido:</p>
                <h4><strong>${recoverPassCode}</strong></h4>
                  <p>Con este código, tu correo electrónico y una nueva contraseña podrás recuperar tu cuenta. Así que, ¡no esperes más y haz clic en "RECUPÉRALA"!</p>
                  <p>Si no fuiste tú quien solicitó este cambio, simplemente ignora este correo. Si necesitas ayuda, no dudes en contactarnos. ¡Estamos aquí para ayudarte!</p>
                    <hr style="border: 1px solid #ddd; margin: 20px 0;">
                  <p>Un abrazo virtual,</p>
                  <p><strong>El equipo de Time Organizer</strong></p>
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
