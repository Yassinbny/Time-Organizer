import validateSchema from "../../validations/validateSchema.js";
import {editUserPassSchema} from "../../validations/usersSchema.js";
import { updatePasswordModel } from "../../models/users/index.js";
import { notFoundError } from "../../services/errorServices.js";

const resetPassController = async (req, res, next) => {
  try {
    //Token autentificación.
    const userId = req.currentUser.id;

    const { password, newPassword } = req.body;

    // Validamos el body con Joi.
    await validateSchema(editUserPassSchema, req.body);

    //Buscamos al usuario por su ID y actualizamos la contraseña en DB.
    const users = await updatePasswordModel(
      userId,
      password,
      newPassword
    );

    if (!users) {
      return notFoundError("usuario");
    }

    res.send({
      status: "ok",
      message: "Contraseña actualizada con éxito.",
    });

  } catch (err) {
    next(err);
  }
};

export default resetPassController;
