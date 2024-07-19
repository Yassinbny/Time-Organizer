import updateNoteModel from "../../models/notes/";
import Joi from "joi";
export default async function updateNoteController(req, res, next) {
  try {
    const body = {
      description: req.body.description,
      note_id: req.params.idNote,
    };

    const updateNoteSchema = Joi.object({
      description: Joi.string().min(1).max(1000).required(),
      note_id: Joi.number().integer().required(),
    });

    const { error, value } = updateNoteSchema.validate(body);

    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.details[0].message,
      });
    }

    const { description, note_id } = value;

    const { message } = await updateNoteModel(description, note_id);
    return res.status(200).json({
      ok: true,
      message: message,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
