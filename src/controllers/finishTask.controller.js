
import finishTaskModel from "../models/finishTask.model.js";
import Joi from "joi";
// creamos el controller que vamos a tener después en las rutas para actualizar el post
export default async function finishTaskController(req, res, next) {
    try {
        // asignamos un valor a currentUser el cual después obtendremos por req
        const currentUser = "1";
        const validateFinishTaskSchema = Joi.object({
            task_id: Joi.number().integer().required()
        })

        // validamos los datos del body 
        const { error, value } = validateFinishTaskSchema.validate({task_id:req.params.idTask});

        
    if (error) {
        return res.status(400).json({
          ok: false,
          message: error.details[0].message,
        });
      }

      const { id } = value;

        // Utilizamos el modelo para finalizar la tarea en la base de datos
        const { result } = await finishTaskModel(id);

       

        return res.status(200).json({
            ok: true,
            message: 'Tarea finalizada con éxito.',
            task: result, // Devolvemos la tarea actualizada
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
}