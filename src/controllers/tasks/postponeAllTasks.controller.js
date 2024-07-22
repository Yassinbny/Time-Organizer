import postponeAllTasksSchema from "../../validations/postponeAllTasksSchema.js";
import { postponeAllTasksModel } from "../../models/tasks/index.js";

export default async function postponeAllTasksController(req, res, next) {
  try {
    const body = {
      finish_on: req.body.finish_on,
    };

    // Validar el cuerpo de la solicitud usando el esquema definido en postponeAllTasksSchema.js
    const { error, value } = postponeAllTasksSchema.validate(body);

    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.details[0].message,
      });
    }

    const { finish_on } = value;

    const { message } = await postponeAllTasksModel(finish_on);

    return res.status(200).json({
      ok: true,
      message: message,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
