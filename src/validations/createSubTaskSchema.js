import Joi from "joi";

const createSubTaskSchema = Joi.object({
  title: Joi.string().min(3).max(200).required(),
  task_id: Joi.number().integer().required(),
});

export default createSubTaskSchema;
