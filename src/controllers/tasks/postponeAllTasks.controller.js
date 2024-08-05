import postponeAllTasksSchema from "../../validations/postponeAllTasksSchema.js";
import { postponeAllTasksModel } from "../../models/tasks/index.js";

export default async function postponeAllTasksController(req, res, next) {
  try {


    // Validar el cuerpo de la solicitud usando el esquema definido en postponeAllTasksSchema.js
    const { error, value } = postponeAllTasksSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.details[0].message,
      });
    }

    const { daysToPostpone = 0, hoursToPostpone = 0 } = value;

// obtenemos todas las tareas de la base de datos
    const { message } = await postponeAllTasksModel(daysToPostpone, hoursToPostpone);

    return res.status(200).json({
      ok: true,
      message: message,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
