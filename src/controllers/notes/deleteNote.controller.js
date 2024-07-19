import Joi from "joi";
import { deleteNoteModel } from "../../models/notes/index.js";

export default async function deleteNotecontroller(req, res, next) {
  try {
    const noteIdSchema = Joi.object({
      note_id: Joi.number().integer().required(),
    });

    const { error, value } = noteIdSchema.validate({
      note_id: req.params.idNote,
    });
    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.details[0].message,
      });
    }
    const { note_id } = value;

    const { message } = await deleteNoteModel(note_id);
    return res.status(200).json({
      ok: true,
      message: message,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
