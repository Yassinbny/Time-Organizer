import Joi from "joi";

const updateTaskSchema = Joi.object({
  title: Joi.string().min(1).max(1000),
  description: Joi.string().min(1).max(1000),
  start_on: Joi.date(),
  finish_on: Joi.date(),
  task_id: Joi.number().integer().required(),
});

export default updateTaskSchema;
