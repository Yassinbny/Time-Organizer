import verifyOwner from "../../middlewares/verifyOwner.js";
import updateTaskModel from "../../models/tasks/updateTask.model.js";
import updateTaskSchema from "../../validations/updateTaskSchema.js";
import verifyTask from "../../validations/verifyTask.js";

export default async function updateTaskController(req, res, next) {
  try {
    const currentUser = req.currentUser.id;
    const body = {
      title: req.body.title,
      description: req.body.description,
      start_on: req.body.start_on,
      finish_on: req.body.finish_on,
      task_id: req.params.idTask,
    };

    // Validar el cuerpo de la solicitud usando el esquema definido en updateTaskSchema.js
    const { error, value } = updateTaskSchema.validate(body);

    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.details[0].message,
      });
    }

    const { title, description, start_on, finish_on, task_id } = value;
    const [[task]] = await verifyTask(task_id);

    verifyOwner(task, currentUser);
    if (task.done) {
      return res.status(400).json({
        ok: false,
        message: "no puedes editar tareas ya finalizadas",
      });
    }
    // Establecer valores predeterminados
    const updatedTitle = title ?? task.title;
    const updatedDescription = description ?? task.description;
    const updatedStartOn = start_on ?? task.start_on;
    const updatedFinishOn = finish_on ?? task.finish_on;
    const { message } = await updateTaskModel(
      updatedTitle,
      updatedDescription,
      updatedStartOn,
      updatedFinishOn,
      task_id
    );

    return res.status(200).json({
      ok: true,
      message: message,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
