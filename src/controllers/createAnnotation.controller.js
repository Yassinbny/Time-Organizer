import createAnnotationModel from "../models/createAnnotation.model.js";
import createAnnotationSchema from "../validations/createAnnotationSchema.js";
// creamos el controller que vamos a tener despues en las rutas para crear el post
export default async function createAnnotationController(req, res, next) {
  try {
    //  asignamos un valor a currentUser el cual despues obtendremos por req
    const currentUser = req.currentUser.id;
    
    // Validamos los datos del body
    const { error, value } = createAnnotationSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.details[0].message,
      });
    }

    const { title, description} = value;

    //   hacemos las consulta con nuestro modelo
    const { annotation } = await createAnnotationModel(
      currentUser,
      title,
      description
    );
    return res.status(200).json({
      ok: true,
      message: annotation,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}