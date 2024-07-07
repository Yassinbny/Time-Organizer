import Joi from "joi";
import listTaskByIdModel from "../models/listTaskById.model.js";
export default async function listTaskByIdcontroller(req, res, next) {
  try {
    const id = req.params.idTask;

    const idSchema = Joi.number().integer();
    const { error, value } = idSchema.validate(id);

    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.details[0].message,
      });
    }
    const { tasks } = await listTaskByIdModel(value);
    if (!tasks) {
      return res.status(404).json({
        ok: false,
        message: "Tasks no encontrados.",
        code: "NOT FOUND",
      });
    }

    return res.status(200).json({
      ok: true,

      tasks,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
