import { createNoteModel } from "../../models/notes/index.js";
import createNoteSchema from "../../validations/createNoteSchema.js";
export default async function createNoteController(req, res, next) {
  try {
    const body = {
      description: req.body.description,
      task_id: req.params.idTask,
    };
    const { error, value } = createNoteSchema.validate(body);
    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.details[0].message,
      });
    }
    const { task_id, description } = value;
    const result = await createNoteModel(task_id, description);

    return res.status(200).json({
      ok: true,
      message: result,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
