import Joi from "joi";

const createTaskSchema = Joi.object({
  title: Joi.string().min(3).max(150).required(),
  description: Joi.string().required(),
  start_on: Joi.date().required(),
  finish_on: Joi.date().required(),
});

export default createTaskSchema;
