import getPool from "../../db/getPool.js";

export default async function createTaskModel(
  currentUser,
  title,
  description,
  start_on,
  finish_on,
  family_id,
  color_id
) {
  try {
    const pool = await getPool();

    const [task] = await pool.query(
      `INSERT INTO tasks(title, description, user_id, start_on, finish_on) 
       VALUES(?,?,?,?,?)`,
      [title, description, currentUser, start_on, finish_on]
    );

    await pool.query(
      `INSERT INTO task_color_family (task_id, color_id, family_id) VALUES (?,?,?)`,
      [task.insertId, color_id, family_id]
    );

    return { task };
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
}
