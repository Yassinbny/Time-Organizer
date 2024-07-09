import Joi from "joi";

const createAnnotationSchema = Joi.object({
  title: Joi.string().min(3).max(150),
  description: Joi.string().required()
});

export default createAnnotationSchema;