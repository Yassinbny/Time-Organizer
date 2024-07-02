import createNoteModel from "../models/createNote.model.js";

export default async function createNoteController(req, res, next) {
  try {
    const { task_id, description } = req.body;

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
