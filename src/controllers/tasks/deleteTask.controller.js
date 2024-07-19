import Joi from "joi";
import { deleteTaskModel } from "../../models/tasks/index.js";

export default async function deleteTaskcontroller(req, res, next) {
  try {
    const taskIdSchema = Joi.object({
      task_id: Joi.number().integer().required(),
    });

    const { error, value } = taskIdSchema.validate({
      task_id: req.params.idTask,
    });
    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.details[0].message,
      });
    }
    const { task_id } = value;

    const { message } = await deleteTaskModel(task_id);
    return res.status(200).json({
      ok: true,
      message: message,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
