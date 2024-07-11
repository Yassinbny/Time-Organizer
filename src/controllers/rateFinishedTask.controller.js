import rateFinishedTaskModel from "../models/rateFinishedTask.model.js";
import Joi from "joi";

export default async function rateFinishedTaskController(req, res, next) {
  try {
    const validateRateFinishedTaskSchema = Joi.object({
      rating: Joi.number().integer().min(1).max(5).required()
    });

    const { error, value } = validateRateFinishedTaskSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.details[0].message,
      });
    }

    const { rating } = value;
    const { idTask } = req.params;

    const { result } = await rateFinishedTaskModel(idTask, rating);

    return res.status(200).json({
      ok: true,
      message: "Tarea calificada con éxito.",
      task: result,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
