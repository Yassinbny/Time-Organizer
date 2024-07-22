import Joi from "joi";

const finishSubTaskSchema = Joi.object({
  subTask_id: Joi.number().integer().required(),
});

export default finishSubTaskSchema;
