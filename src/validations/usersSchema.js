// Importamos joi.
import Joi from "joi";

// Importamos los mensajes de error personalizados.
import joiErrorMessages from "./joiErrorMessages.js";


// Creamos el esquema de Joi donde comprobamos todas las propiedades necesarias.
export const signUpSchema = Joi.object({
  username: Joi.string()
  .max(100)
  .required()
  .messages(joiErrorMessages),
  email: Joi.string()
  .email()
  .required()
  .messages(joiErrorMessages),
  password: Joi.string()
  .min(8)
  .max(200)
  .required()
  .messages(joiErrorMessages),
});

export const editUserPassSchema = Joi.object({

  email: Joi.string().email().required().messages(joiErrorMessages),
  password: Joi.string().min(8).max(200).required().messages(joiErrorMessages),
  newPassword: Joi.string().min(8).max(200).required().messages(joiErrorMessages),
});

