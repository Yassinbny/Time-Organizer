import Joi from "joi";

const createNoteSchema = Joi.object({
  description: Joi.string().min(1).max(1000).required(),
  task_id: Joi.number().integer().required(),
});

export default createNoteSchema;
