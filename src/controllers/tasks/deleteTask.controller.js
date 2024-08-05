import verifyOwner from "../../middlewares/verifyOwner.js";
import { deleteTaskModel } from "../../models/tasks/index.js";
import deleteTaskSchema from "../../validations/deleteTaskSchema.js";
import verifyTask from "../../validations/verifyTask.js";

export default async function deleteTaskController(req, res, next) {
  try {
    const currentUser = req.currentUser.id;

    const { error, value } = deleteTaskSchema.validate({
      task_id: req.params.idTask,
    });

    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.details[0].message,
      });
    }

    const { task_id } = value;
    const [[task]] = await verifyTask(task_id);
    if (!task) {
      return res.status(400).json({
        ok: false,
        message: "task no encontrado",
      });
    }
    verifyOwner(task, currentUser);
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
