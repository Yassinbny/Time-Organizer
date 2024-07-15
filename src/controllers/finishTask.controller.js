import finishTaskModel from "../models/finishTask.model.js";
import Joi from "joi";

export default async function finishTaskController(req, res, next) {
  try {
    const validateFinishTaskSchema = Joi.object({
      task_id: Joi.number().integer().required(),
    });

    const { error, value } = validateFinishTaskSchema.validate({
      task_id: req.params.idTask,
    });

    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.details[0].message,
      });
    }

    const { task_id } = value;

    const { result } = await finishTaskModel(task_id);

    return res.status(200).json({
      ok: true,
      message: "Tarea finalizada con éxito.",
      task: result,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
