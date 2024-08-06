import getPool from "../../db/getPool.js";

export default async function finishTaskModel(task_id) {
  try {
    const pool = await getPool();
    const [result] = await pool.query(
      `UPDATE tasks SET done = TRUE WHERE task_id = ?`,
      [task_id]
    );
    return { result };
  } catch (error) {
    throw error;
  }
}
