import getPool from "../../db/getPool.js";

export default async function deleteAllSubtasksModel(task_id) {
  try {
    const pool = await getPool();
    const [result] = await pool.query(
      `DELETE FROM subtask
WHERE task_id = ? `,
      [task_id]
    );

    console.log(result.changedRows);
    return {
      message: result.affectedRows
        ? "Las subtareas han sido eliminadas con éxito."
        : "No existe ninguna subtarea con ese id.",
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
