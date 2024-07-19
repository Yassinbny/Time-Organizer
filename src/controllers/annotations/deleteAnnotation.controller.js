import Joi from "joi";
import deleteAnnotationModel from "../../models/annotations/index.js";

export default async function deleteAnnotationController(req, res, next) {
  try {
    const annotationIdSchema = Joi.object({
      annotation_id: Joi.number().integer().required(),
    });

    const { error, value } = annotationIdSchema.validate({
      annotation_id: req.params.idAnnotation,
    });
    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.details[0].message,
      });
    }
    const { annotation_id } = value;

    const { message } = await deleteAnnotationModel(annotation_id);
    return res.status(200).json({
      ok: true,
      message: message,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}