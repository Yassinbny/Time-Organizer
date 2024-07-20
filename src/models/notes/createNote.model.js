import getPool from "../../db/getpool.js";

export default async function createNoteModel(
  task_id,
  description,
  currentUser
) {
  try {
    const pool = await getPool();

    const [result] = await pool.query(
      `INSERT INTO notes (task_id, description,user_id) VALUES (?, ?,?)`,
      [task_id, description, currentUser.id]
    );

    return result;
  } catch (error) {
    throw error;
  }
}
