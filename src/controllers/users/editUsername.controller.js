import validateSchema from "../../validations/validateSchema.js";
import { editUsernameSchema } from "../../validations/usersSchema.js";
import { editUsernameModel } from "../../models/users/index.js";
import { notFoundError } from "../../services/errorServices.js";

//Editamos o modificamos nuestro nombre de usuario.
const editUsernameController = async (req, res, next) => {
  try {
    //Token autentificación.
    const userId = req.currentUser.id;

    const { newUsername } = req.body;

    // Validamos el body con Joi.
    await validateSchema(editUsernameSchema, req.body);

    //Buscamos al usuario por su Id y actualizamos username en DB.
    const users = await editUsernameModel(userId, newUsername);

    if (!users) {
      return notFoundError("usuario");
    }

    res.send({
      status: "ok",
      message: "Nombre de usuario actualizado con éxito.",
    });
  } catch (err) {
    next(err);
  }
};

export default editUsernameController;
