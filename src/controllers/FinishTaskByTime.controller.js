import finishTaskByTimeModel from "../models/finishTaskByTime.model.js";

export default async function finishTaskByTimeController(req, res, next) {
  try {
    // Utilizamos el modelo para finalizar la tarea en la base de datos
    const { result } = await finishTaskByTimeModel();

    return res.status(200).json({
      ok: true,
      message: result,
      // Devolvemos la tarea actualizada
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
