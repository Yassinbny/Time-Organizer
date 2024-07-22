import Joi from "joi";

const idSchema = Joi.number().integer().required();

export default idSchema;
