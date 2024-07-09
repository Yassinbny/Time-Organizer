import rateFinishedTaskModel from "../models/rateFinishedTask.model.js";
import Joi from "joi";

export default async function rateFinishedTaskController (req, res, next) {

    try {
        const validateRateFinishedTaskSchema = Joi.object({
            rating: Joi.number().integer().min(1).max(5).required()
        })

        const { error, value } = validateRateFinishedTaskSchema.validate(req.body);
        if (error) {
            throw new Error(error.details[0].message);
        }

        const { rating } = value;

        const { idTask } = req.params;

        await rateFinishedTaskModel(idTask, rating)

        res.status(200).json({ success: true, message: "Task rated successfully" });
    } catch (error) {
        console.log(error);
        next(error);
    }
}