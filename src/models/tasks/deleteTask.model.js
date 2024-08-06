import getPool from "../../db/getPool.js";

export default async function deleteTaskModel(task_id) {
  try {
    const pool = await getPool();
    const [result1] = await pool.query(
      `DELETE FROM task_color_family
WHERE task_id = ? `,
      [task_id]
    );
    const [result] = await pool.query(
      `DELETE FROM tasks
WHERE task_id = ? `,
      [task_id]
    );

    console.log(result.changedRows);
    return {
      message: result.affectedRows
        ? "La tarea ha sido eliminada con éxito."
        : "No existe ninguna tarea con ese id.",
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
