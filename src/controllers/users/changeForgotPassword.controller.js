
import { changeForgotPasswordModel } from "../../models/users/index.js";

const changeForgotPasswordController = async (req, res, next) => {
  try {
    const { email, code, newPassword , confirmPassword} = req.body;

    // Validar que el código de recuperación es correcto y cambiar la contraseña
    await changeForgotPasswordModel(email, code, newPassword, confirmPassword);

    res.send({
      status: "ok",
      message: "La contraseña ha sido cambiada exitosamente.",
    });
  } catch (error) {
    next(error);
  }
};

export default changeForgotPasswordController;