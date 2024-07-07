import validateSchema from "../../validations/validateSchema.js";
import editUserPassSchema from "../../validations/updatePassSchema.js";
import { updatePasswordModel } from "../../models/users/index.js";

const resetPassController = async (req, res, next) => {
  try {
    const { email, recoverPassCode, newPassword } = req.body;

    // Validamos el body con Joi.
    await validateSchema(editUserPassSchema, req.body);

    const { result } = await updatePasswordModel(
      email,
      recoverPassCode,
      newPassword
    );

    res.send({
      status: "ok",
      message: "Contraseña actualizada con éxito.",
      result,
    });
  } catch (err) {
    next(err);
  }
};

export default resetPassController;
