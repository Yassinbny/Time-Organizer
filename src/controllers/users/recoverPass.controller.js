import randomstring from "randomstring";
import { passRecoverModel } from "../../models/users/index.js";

import sendMail from "../../services/sendMail.js";

const recoverPassController = async (req, res, next) => {
  const { email } = req.body;

  const recoverPassCode = randomstring.generate(10);

  await passRecoverModel(email, recoverPassCode);

  const emailSubject = "Recuperación de contraseña en Time Organizer :)";

  const emailBody = `
    Se ha solicitado la recuperación de contraseña para este email en Time Organizer. 
              
    Utiliza el siguiente código para crear una nueva contraseña: ${recoverPassCode}

    Si no has sido tú, ignora este email.
  `;

  await sendMail(email, emailSubject, emailBody);

  try {
    res.send({
      status: "ok",
      message: "Se ha enviado un correo para la recuperación de la contraseña.",
    });
  } catch (error) {
    next(error);
  }
};

export default recoverPassController;
