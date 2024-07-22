import Joi from "joi";

const updateAnnotationSchema = Joi.object({
  title: Joi.string().min(1).max(1000),
  description: Joi.string().min(1).max(1000).required(),
  annotation_id: Joi.number().integer().required(),
});

export default updateAnnotationSchema;
