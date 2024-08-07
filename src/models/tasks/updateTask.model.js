import getPool from "../../db/getpool.js";

export default async function updateTaskModel(
  title,
  description,
  start_on,
  finish_on,
  idTask
) {
  try {
    const pool = await getPool();
    const [result] = await pool.query(
      ` UPDATE tasks SET 
        title = ?,
        description = ?,
        start_on = ?,
        finish_on = ?
          WHERE task_id = ?`,
      [title, description, start_on, finish_on, idTask]
    );
    console.log(result.changedRows);
    return {
      message: result.changedRows
        ? "Cambio realizado con éxito."
        : "No hubo cambios.",
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
