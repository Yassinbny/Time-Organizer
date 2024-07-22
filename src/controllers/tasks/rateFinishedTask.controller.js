import rateFinishedTaskSchema from "../../validations/rateFinishedTaskSchema.js";
import rateFinishedTaskModel from "../../models/tasks/rateFinishedTask.model.js";

export default async function rateFinishedTaskController(req, res, next) {
  try {
    // Validar el cuerpo de la solicitud usando el esquema definido en rateFinishedTaskSchema.js
    const { error, value } = rateFinishedTaskSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.details[0].message,
      });
    }

    const { rating } = value;
    const { idTask } = req.params;

    const { result } = await rateFinishedTaskModel(idTask, rating);

    return res.status(200).json({
      ok: true,
      message: "Tarea calificada con éxito.",
      task: result,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
