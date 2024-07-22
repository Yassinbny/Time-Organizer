import Joi from "joi";
import { deleteNoteModel } from "../../models/notes/index.js";
import deleteNoteSchema from "../../validations/deleteNoteSchema.js";

export default async function deleteNotecontroller(req, res, next) {
  try {
    // Validar el ID de la nota con el esquema
    const { error, value } = deleteNoteSchema.validate({
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
