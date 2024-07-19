import validateSchema from "../../validations/validateSchema.js";
import { avatarSchema } from "../../validations/usersSchema.js";
import {
  saveImageService,
  deleteImageService,
} from "../../services/imageServices.js";
import { avatarModel } from "../../models/users/index.js";
import { selectUserByIdModel } from "../../models/users/index.js";
import { notFoundError } from "../../services/errorServices.js";

const avatarController = async (req, res, next) => {
  try {
    //Verificar al usuario por su id.
    const userId = req.currentUser.id;

    const avatarFile = req.files.avatar;

    //Validar con Joi.
    await validateSchema(avatarSchema, req.files || {});

    //Comprobar si hay un avatar previo.
    const users = await selectUserByIdModel(userId);

    //Eliminar el avatar anterior si lo hubiera.
    if (!avatarFile) {
      return notFoundError("avatar");
    }

    if (users && users.avatar) {
      await deleteImageService(users.avatar);
    }

    //Procesar con Sharp y guardar el archivo.
    const avatarName = await saveImageService(req.files.avatar, 100);

    //Con el model, actualizamos avatar en DB.
    await avatarModel(avatarName, userId);

    res.send({
      status: "ok",
      message: "Avatar actualizado con éxito.",
    });
  } catch (err) {
    next(err);
  }
};

export default avatarController;
