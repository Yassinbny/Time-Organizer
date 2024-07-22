import Joi from "joi";

const deleteTaskSchema = Joi.object({
  task_id: Joi.number().integer().required(),
});

export default deleteTaskSchema;
