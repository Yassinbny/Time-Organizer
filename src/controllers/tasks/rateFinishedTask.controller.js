import rateFinishedTaskSchema from "../../validations/rateFinishedTaskSchema.js";
import rateFinishedTaskModel from "../../models/tasks/rateFinishedTask.model.js";
import verifyTask from "../../validations/verifyTask.js";
import verifyOwner from "../../middlewares/verifyOwner.js";

export default async function rateFinishedTaskController(req, res, next) {
  try {
    const currentUser = req.currentUser.id;

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

    const [[task]] = await verifyTask(idTask);
    if (!task) {
      return res.status(400).json({
        ok: false,
        message: "task no encontrado",
      });
    }
    verifyOwner(task, currentUser);

    if (task.rating) {
      return res.status(400).json({
        ok: false,
        message: "esta tarea ya ha sido calificada",
      });
    }

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
