import Joi from "joi";

const postponeTaskSchema = Joi.object({
  task_id: Joi.number().integer().required(),
  daysToPostpone: Joi.number().integer().min(0).optional(),
  hoursToPostpone: Joi.number().integer().min(0).optional(),
});

export default postponeTaskSchema;
