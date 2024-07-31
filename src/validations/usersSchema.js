// Importamos joi.
import Joi from "joi";

// Importamos los mensajes de error personalizados.
import joiErrorMessages from "./joiErrorMessages.js";

import imageSchema from "../validations/imageSchema.js";


// Creamos el esquema de Joi donde comprobamos todas las propiedades necesarias.

//Registro o sign up.
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

//Editar o actualizar contraseña.
export const editUserPassSchema = Joi.object({
  password: Joi.string()
  .min(8)
  .max(200)
  .required()
  .messages(joiErrorMessages),
  newPassword: Joi.string()
  .min(8)
  .max(200)
  .required()
  .messages(joiErrorMessages),
});

//Editar nombre usuario.
export const editUsernameSchema = Joi.object({
  newUsername: Joi.string()
  .max(100)
  .required()
  .messages(joiErrorMessages),
});

//Avatar.
export const avatarSchema = Joi.object({
  avatar: imageSchema.required(),
});

//Cargar imágenes.
export const uploadImageSchema = Joi.object ({
  imageBoard: imageSchema.required(),
});