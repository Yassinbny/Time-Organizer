import Joi from "joi";

const createNoteSchema = Joi.object({
  taskId: Joi.number().integer().required(),
  description: Joi.string().min(1).max(1000).required(),
});

export default createNoteSchema;
