import Joi from "joi";

const postponeAllTasksSchema = Joi.object({
  daysToPostpone: Joi.number().integer().min(0).optional(),
  hoursToPostpone: Joi.number().integer().min(0).optional(),
});

export default postponeAllTasksSchema;
