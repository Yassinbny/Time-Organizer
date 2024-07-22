import Joi from "joi";

const postponeAllTasksSchema = Joi.object({
  finish_on: Joi.date().required(),
});

export default postponeAllTasksSchema;
