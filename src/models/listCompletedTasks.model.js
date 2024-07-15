import getPool from "../db/getpool.js";

export default async function listCompletedTasksModel(userId) {
  try {
    const pool = await getPool();

    const [completedTasks] = await pool.query(
      `SELECT task_id, title, description, start_on, finish_on, done, rating 
       FROM tasks 
       WHERE user_id = ? AND done = TRUE`,
      [userId]
    );

    return { completedTasks };
  } catch (error) {
    throw error;
  }
}

