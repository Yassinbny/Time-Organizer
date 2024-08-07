import verifyOwner from "../../middlewares/verifyOwner.js";
import { deleteAllSubtasksModel } from "../../models/tasks/index.js";
import deleteAllSubtaskSchema from "../../validations/deleteAllSubtasksSchema.js";

export default async function deleteAllSubtasksController(req, res, next) {
  try {
    const currentUser = req.currentUser.id;

    const { error, value } = deleteAllSubtaskSchema.validate({
      task_id: req.params.idTask,
    });

    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.details[0].message,
      });
    }

    const { task_id } = value;

    const { message } = await deleteAllSubtasksModel(task_id);
    return res.status(200).json({
      ok: true,
      message: message,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
