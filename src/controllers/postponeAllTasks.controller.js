import postponeAllTasksModel from "../models/postponeAllTasks.model.js";
import Joi from "joi";

export default async function postponeAllTasksController(req, res, next) {

    try {
        const body = {
            start_on: req.body.start_on,
            finish_on: req.body.finish_on
        }

        const postponeAllTasksSchema = Joi.object({
            start_on: Joi.date().required(),
            finish_on: Joi.date().required()
        })

        const { error, value } = postponeAllTasksSchema.validate(body)

        if (error) {
            return res.status(400).json({
                ok: false,
                message: error.details[0].message
            })
        }

        const { start_on, finish_on } = value

        const { message } = await postponeAllTasksModel(start_on, finish_on)

        return res.status(200).json({
            ok: true,
            message: message
        })
        
    } catch (error) {
        console.log(error)
        throw error;
    }
}