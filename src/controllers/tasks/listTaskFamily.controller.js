import { listTaskFamilyModel } from "../../models/tasks/index.js";

export default async function listTaskFamilyController(req, res, next) {
  try {
    // Obtener parámetros de búsqueda y ordenado desde los query params

    // Llamar al modelo para obtener la lista de tareas de familia
    const { taskFamilies } = await listTaskFamilyModel();

    // Enviar la respuesta
    return res.status(200).json({
      ok: true,

      taskFamilies,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
