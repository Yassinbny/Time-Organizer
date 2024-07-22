import Joi from "joi";

const deleteNoteSchema = Joi.object({
  note_id: Joi.number().integer().required(),
});

export default deleteNoteSchema;
