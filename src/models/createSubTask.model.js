import getPool from "../db/getpool.js";
export default async function createSubTaskModel(title, task_id) {
  try {
    const pool = await getPool();
    const [subTask] = await pool.query(
      `INSERT INTO subtask(title,task_id)VALUES(?,?)`,
      [title, task_id]
    );
    return { subTask };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
