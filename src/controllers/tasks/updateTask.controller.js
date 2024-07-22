import updateTaskModel from "../../models/tasks/updateTask.model.js";
import updateTaskSchema from "../../validations/updateTaskSchema.js";

export default async function updateTaskController(req, res, next) {
  try {
    const body = {
      title: req.body.title,
      description: req.body.description,
      start_on: req.body.start_on,
      finish_on: req.body.finish_on,
      task_id: req.params.idTask,
    };

    // Validar el cuerpo de la solicitud usando el esquema definido en updateTaskSchema.js
    const { error, value } = updateTaskSchema.validate(body);

    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.details[0].message,
      });
    }

    const { title, description, start_on, finish_on, task_id } = value;

    const { message } = await updateTaskModel(
      title,
      description,
      start_on,
      finish_on,
      task_id
    );

    return res.status(200).json({
      ok: true,
      message: message,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
