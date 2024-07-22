import { updateAnnotationModel } from "../../models/annotations/index.js";
import updateAnnotationSchema from "../../validations/updateAnnotationSchema.js";

export default async function updateAnnotationController(req, res, next) {
  try {
    const body = {
      title: req.body.title,
      description: req.body.description,
      annotation_id: req.params.idAnnotation,
    };

    // Usar el esquema de validación desde el archivo
    const { error, value } = updateAnnotationSchema.validate(body);

    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.details[0].message,
      });
    }

    const { title, description, annotation_id } = value;

    const { message } = await updateAnnotationModel(
      title,
      description,
      annotation_id
    );
    return res.status(200).json({
      ok: true,
      message: message,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
