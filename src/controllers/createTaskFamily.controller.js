import createTaskFamilyModel from "../models/createTaskFamily.model.js";
import Joi from "joi";
export default async function createTaskFamilyController(req, res, next) {
  try {
    const body = {
      name: req.body.name,
      color: req.body.color,
      task_id: req.params.idTask,
    };
    const taskFamilySchema = Joi.object({
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

    const { error, value } = taskFamilySchema.validate(body);

    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.details[0].message,
      });
    }

    const { name, color, task_id } = value;
    const { taskFamily } = await createTaskFamilyModel(name, color, task_id);
    return res.status(200).json({
      ok: true,
      message: taskFamily,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
