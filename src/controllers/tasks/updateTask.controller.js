import updateTaskModel from "../../models/updateTask.model.js";
import Joi from "joi";
export default async function updateTaskController(req, res, next) {
  try {
    const body = {
        title: req.body.title,
      description: req.body.description,
      start_on: req.body.start_on,
      finish_on: req.body.finish_on,
      task_id: req.params.idTask,
    };

    const updateTaskSchema = Joi.object({
      title: Joi.string().min(1).max(1000).required(),
      description: Joi.string().min(1).max(1000).required(),
      start_on: Joi.date().required(),
      finish_on: Joi.date().required(),
      task_id: Joi.number().integer().required(),
    });

    const { error, value } = updateTaskSchema.validate(body);

    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.details[0].message,
      });
    }

    const { title, description, start_on, finish_on, task_id } = value;

    const { message } = await updateTaskModel(title, description, start_on, finish_on, task_id);
    return res.status(200).json({
      ok: true,
      message: message,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}