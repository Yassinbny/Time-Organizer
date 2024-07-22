import Joi from "joi";

const createTaskFamilySchema = Joi.object({
  name: Joi.string()
    .valid("trabajo", "deporte", "estudios", "casa", "ocio")
    .required(),
  color: Joi.string().valid(
    "negro",
    "blanco",
    "verde",
    "azul",
    "rojo",
    "amarillo",
    "gris"
  ),
  task_id: Joi.number().integer().required(),
});

export default createTaskFamilySchema;
