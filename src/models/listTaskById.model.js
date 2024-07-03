import getPool from "../db/getpool.js";

export default async function listTaskByIdModel(id) {
  try {
    let pool = await getPool();
    const [[tasks]] = await pool.query(
      "SELECT * FROM tasks WHERE task_id = ?",
      [id]
    );

    return { tasks };
  } catch (error) {
    console.error(error);
  }
}
