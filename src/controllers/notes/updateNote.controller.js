import { updateNoteModel } from "../../models/notes/index.js";
import updateNoteSchema from "../../validations/updateNoteSchema.js";

export default async function updateNoteController(req, res, next) {
  try {
    const currentUser = req.currentUser;

    // Validar el cuerpo de la solicitud con el esquema
    const body = {
      description: req.body.description,
      note_id: req.params.idNote,
    };

    const { error, value } = updateNoteSchema.validate(body);

    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.details[0].message,
      });
    }

    const { description, note_id } = value;

    const { message } = await updateNoteModel(
      description,
      currentUser,
      note_id
    );
    return res.status(200).json({
      ok: true,
      message: message,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
