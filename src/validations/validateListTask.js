import Joi from "joi";

const listTaskSchema = Joi.object({
  search: Joi.string().min(3).max(500),
  sort: Joi.string().valid("title", "description"),
  order: Joi.string().valid("ASC", "DESC"),
});

export default listTaskSchema;
