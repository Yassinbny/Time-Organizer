import postponeTaskSchema from "../../validations/postponeTaskSchema.js";
import { postponeTaskModel } from "../../models/tasks/index.js";

export default async function postponeTaskController(req, res, next) {
  try {
    const body = {
      task_id: req.params.idTask,
    };

    // Validar el cuerpo de la solicitud usando el esquema definido en postponeTaskSchema.js
    const { error, value } = postponeTaskSchema.validate(body);

    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.details[0].message,
      });
    }

    const { task_id } = value;

    const { message } = await postponeTaskModel(task_id);

    return res.status(200).json({
      ok: true,
      message: message,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
