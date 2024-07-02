import getPool from "../db/getpool.js";

export default async function createNoteModel(task_id, description) {
  try {
    const pool = await getPool();

    const [result] = await pool.query(
      'INSERT INTO notes (task_id, description) VALUES (?, ?)',
      [task_id, description]
    );

    return result;
  } catch (error) {
    throw error;
  }
}
