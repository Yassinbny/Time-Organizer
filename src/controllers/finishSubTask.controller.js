import finishSubTaskModel from "../models/finishSubTask.model.js";
import Joi from "joi";
// Creamos el controller que vamos a tener después en las rutas para actualizar la subtarea
export default async function finishSubTaskController(req, res, next) {
    try {
        // Asignamos un valor a currentUser el cual después obtendremos por req
        const validateFinishSubTaskSchema = Joi.object({
            subTask_id: Joi.number().integer().required()
        });

        //Validamos los datos del body
        const {error, value} = validateFinishSubTaskSchema.validate({
            subTask_id:req.params.idSubTask
        });

        if (error) {
            return res.status(400).json({
                ok: false,
                message: error.details[0].message,
            });
        }

        const {subTask_id } = value;

        //Utilizamos el modelo para finalizar la subtarea en la base de datos
        const { result } = await finishSubTaskModel(subTask_id);

        return res.status(200).json({
            ok: true,
            message: 'Subtarea finalizada con éxito.',
            subtask: result, //Devolvemos la subtarea actualizada
        });
        
    } catch (error) {
        console.log(error);
        next(error);
    }
}