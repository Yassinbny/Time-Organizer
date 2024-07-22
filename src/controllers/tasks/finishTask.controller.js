import { finishTaskModel } from "../../models/tasks/index.js";
import finishTaskSchema from "../../validations/finishTaskSchema.js";

export default async function finishTaskController(req, res, next) {
  try {
    // Validamos los datos del body
    const { error, value } = finishTaskSchema.validate({
      task_id: req.params.idTask,
    });

    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.details[0].message,
      });
    }

    const { task_id } = value;

    // Utilizamos el modelo para finalizar la tarea en la base de datos
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
