import Joi from "joi";

const postponeTaskSchema = Joi.object({
  finish_on: Joi.date().required(),
  task_id: Joi.number().integer().required(),
});

export default postponeTaskSchema;
