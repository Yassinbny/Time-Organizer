// Importamos joi.
import Joi from "joi";

// Importamos los mensajes de error personalizados.
import joiErrorMessages from "./joiErrorMessages.js";

// Creamos el esquema de Joi donde comprobamos todas las propiedades necesarias.
const editUserPassSchema = Joi.object({
  email: Joi.string().email().required().messages(joiErrorMessages),
  password: Joi.string().min(8).max(200).required().messages(joiErrorMessages),
  newPassword: Joi.string().min(8).max(200).required().messages(joiErrorMessages),
});

export default editUserPassSchema;
