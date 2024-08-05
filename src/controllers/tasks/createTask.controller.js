import { createTaskModel } from "../../models/tasks/index.js";
import createTaskSchema from "../../validations/createTaskSchema.js";

// creamos el controller que vamos a tener despues en las rutas para crear el post
export default async function createTaskController(req, res, next) {
  try {
    // asignamos un valor a currentUser el cual despues obtendremos por req
    const currentUser = req.currentUser.id;

    // Validamos los datos del body
    const { error, value } = createTaskSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.details[0].message,
      });
    }

    const { title, description, start_on, finish_on, family_id, color_id } = value;
    let start = new Date(start_on);
    let end = new Date(finish_on);
    let today = new Date();
    today.setHours(0, 0, 0, 0); // Resetea la hora a medianoche para comparar solo la fecha

    if (start < today) {
      return res.status(400).json({
        ok: false,
        message: "La fecha de inicio no puede ser anterior a la de hoy",
      });
    }

    if (start >= end) {
      return res.status(400).json({
        ok: false,
        message: "La fecha de fin no puede ser inferior o igual a la de inicio",
      });
    }

    // hacemos la consulta con nuestro modelo
    const { task } = await createTaskModel(
      currentUser,
      title,
      description,
      start,
      end,
      family_id,
      color_id
    );

    return res.status(200).json({
      ok: true,
      message: "Tarea creada con éxito",
      id: task.insertId,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
