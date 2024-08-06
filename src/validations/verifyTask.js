import getPool from "../db/getPool.js";

export default async function verifyTask(id) {
  try {
    const pool = await getPool();
    const task = await pool.query(`SELECT * FROM tasks WHERE task_id = ?`, [
      id,
    ]);

    if (!task) {
      throw {
        status: 404,
        message: "task no encontrado",
        code: "NOT FOUND",
      };
    }

    return task;
  } catch (error) {
    throw error;
  }
}
