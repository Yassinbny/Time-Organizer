import Joi from "joi";

const finishTaskSchema = Joi.object({
  task_id: Joi.number().integer().required(),
});

export default finishTaskSchema;
