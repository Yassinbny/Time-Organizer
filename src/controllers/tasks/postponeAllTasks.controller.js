import postponeAllTasksModel from "../../models/tasks/postponeAllTasks.model.js";
import Joi from "joi";

export default async function postponeAllTasksController(req, res, next) {

    try {
        const body = {
            finish_on: req.body.finish_on
        }

        const postponeAllTasksSchema = Joi.object({
            finish_on: Joi.date().required()
        })

        const { error, value } = postponeAllTasksSchema.validate(body)

        if (error) {
            return res.status(400).json({
                ok: false,
                message: error.details[0].message
            })
        }

        const { finish_on } = value

        const { message } = await postponeAllTasksModel(finish_on)

        return res.status(200).json({
            ok: true,
            message: message
        })
        
    } catch (error) {
        console.log(error)
        next (error);
    }
}