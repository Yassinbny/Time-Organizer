import Joi from "joi";

const updateNoteSchema = Joi.object({
  description: Joi.string().min(1).max(1000).required(),
  note_id: Joi.number().integer().required(),
});

export default updateNoteSchema;
