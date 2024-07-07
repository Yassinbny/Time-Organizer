import createTaskModel from "../models/createTask.model.js";
import createTaskSchema from "../validations/createTaskSchema.js";
// creamos el controller que vamos a tener despues en las rutas para crear el post
export default async function createTaskController(req, res, next) {
  try {
    //  asignamos un valor a currentUser el cual despues obtendremos por req
    const currentUser = req.currentUser.id;

    // Validamos los datos del body
    const { error, value } = createTaskSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.details[0].message,
      });
    }

    const { title, description, start_on, finish_on } = value;

    //   hacemos las consulta con nuestro modelo
    const { task } = await createTaskModel(
      currentUser,
      title,
      description,
      start_on,
      finish_on
    );
    return res.status(200).json({
      ok: true,
      message: task,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
