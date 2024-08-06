import Joi from "joi";

const deleteAllSubtaskSchema = Joi.object({
  task_id: Joi.number().integer().required(),
});

export default deleteAllSubtaskSchema;