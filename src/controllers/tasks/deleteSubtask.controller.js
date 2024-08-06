import verifyOwner from "../../middlewares/verifyOwner.js";
import { deleteSubtaskModel } from "../../models/tasks/index.js";
import deleteTaskSchema from "../../validations/deleteTaskSchema.js";
import verifyTask from "../../validations/verifyTask.js";

export default async function deleteSubtaskController(req, res, next) {
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

    const { subtask_id } = value;
    const [[subtask]] = await verifyTask(subtask_id);
    if (!task) {
      return res.status(400).json({
        ok: false,
        message: "subtask no encontrado",
      });
    }
    verifyOwner(subtask, currentUser);
    const { message } = await deleteSubtaskModel(subtask_id);
    return res.status(200).json({
      ok: true,
      message: message,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
