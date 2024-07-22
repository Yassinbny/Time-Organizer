import { finishSubTaskModel } from "../../models/tasks/index.js";
import finishSubTaskSchema from "../../validations/finishSubTaskSchema.js";

export default async function finishSubTaskController(req, res, next) {
  try {
    // Validamos los datos del body
    const { error, value } = finishSubTaskSchema.validate({
      subTask_id: req.params.idSubTask,
    });

    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.details[0].message,
      });
    }

    const { subTask_id } = value;

    // Utilizamos el modelo para finalizar la subtarea en la base de datos
    const { result } = await finishSubTaskModel(subTask_id);

    return res.status(200).json({
      ok: true,
      message: "Subtarea finalizada con éxito.",
      subtask: result, // Devolvemos la subtarea actualizada
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
