import Joi from "joi";
import joiErrorMessages from "./joiErrorMessages.js";

// Creamos un esquema para validar imágenes.
const imageSchema = Joi
  .object({
    name: Joi.string().required().messages(joiErrorMessages),
    mimetype: Joi
      .string()
      .valid("image/jpeg", "image/png", "image/jpg", "image/gif")
      .required()
      .messages(joiErrorMessages),
    size: Joi.number().max(5000000).required().messages(joiErrorMessages),
  })
  .unknown(true);

export default imageSchema;