import verifyOwner from "../../middlewares/verifyOwner.js";
import { deleteSubtaskModel } from "../../models/tasks/index.js";
import deleteSubtaskSchema from "../../validations/deleteSubtaskSchema.js";

export default async function deleteSubtaskController(req, res, next) {
  try {
    const currentUser = req.currentUser.id;

    const { error, value } = deleteSubtaskSchema.validate({
      subtask_id: req.params.subtask_id,
    });

    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.details[0].message,
      });
    }

    const { subtask_id } = value;
    
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
