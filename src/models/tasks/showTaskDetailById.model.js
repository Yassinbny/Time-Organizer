import getPool from "../../db/getPool.js";

export default async function showTaskDetailByIdModel(id) {
  try {
    let pool = await getPool();
    const [[tasks]] = await pool.query(
      "SELECT * FROM tasks WHERE task_id = ?",
      [id]
    );
    const [subTasks] = await pool.query(
      "SELECT * FROM subtask WHERE task_id = ?",
      [id]
    );
    const [notes] = await pool.query("SELECT * FROM notes WHERE task_id = ?", [
      id,
    ]);

    return { tasks, subTasks, notes };
  } catch (error) {
    console.error(error);
  }
}
