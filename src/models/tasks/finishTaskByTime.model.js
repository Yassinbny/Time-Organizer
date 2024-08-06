import getPool from "../../db/getpool.js";

export default async function finishTaskByTimeModel() {
  try {
    // hacemos la conexión con la base de datos
    const pool = await getPool();

    // desactivamos el safe modo ya que estamos haciendo una consulta sin ninguna restricciones
    const [sfRes] = await pool.query(`SET sql_safe_updates = 0`);

    if (!sfRes) {
      throw new Error("no has desactivamos el safe mode");
    }
    const [result] = await pool.query(
      `UPDATE tasks SET done = true wHERE finish_on < NOW() - INTERVAL 1 HOUR`
    );
    // retornamos la tarea
    return {
      result:
        result.changedRows > 0
          ? "tareas finalizadas con exito"
          : "no hubo cambios",
    };
  } catch (error) {
    throw error;
  }
}
