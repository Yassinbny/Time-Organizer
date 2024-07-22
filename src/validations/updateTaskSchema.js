import Joi from "joi";

const updateTaskSchema = Joi.object({
  title: Joi.string().min(1).max(1000).required(),
  description: Joi.string().min(1).max(1000).required(),
  start_on: Joi.date().required(),
  finish_on: Joi.date().required(),
  task_id: Joi.number().integer().required(),
});

export default updateTaskSchema;
