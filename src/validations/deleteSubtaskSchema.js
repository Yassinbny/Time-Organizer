import Joi from "joi";

const deleteSubtaskSchema = Joi.object({
  subtask_id: Joi.number().integer().required(),
});

export default deleteSubtaskSchema;