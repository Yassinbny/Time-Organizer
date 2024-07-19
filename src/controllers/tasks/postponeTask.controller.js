import postponeTaskModel from "../../models/postponeTask.model.js";
import Joi from "joi";

export default async function postponeTaskController(req, res, next) {

    try {
        const body = {
            finish_on: req.body.finish_on,
            task_id: req.params.idTask
        }

        const postponeTaskSchema = Joi.object({
            finish_on: Joi.date().required(),
            task_id: Joi.number().integer().required(),
        })

        const { error, value } = postponeTaskSchema.validate(body)

        if (error) {
            return res.status(400).json({
                ok: false,
                message: error.details[0].message
            })
        }

        const { finish_on, task_id } = value

        const { message } = await postponeTaskModel(finish_on, task_id)

        return res.status(200).json({
            ok: true,
            message: message
        })
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}