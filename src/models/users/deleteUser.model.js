import getPool from "../../db/getpool.js";

export default async function deleteUserModel(user_id) {
  try {
    const pool = await getPool();

    // Eliminar registros dependientes
    await pool.query(
      `DELETE FROM task_color_family WHERE task_id IN (SELECT task_id FROM tasks WHERE user_id = ?)`,
      [user_id]
    );
    await pool.query(
      `DELETE FROM subtask WHERE task_id IN (SELECT task_id FROM tasks WHERE user_id = ?)`,
      [user_id]
    );
    await pool.query(
      `DELETE FROM notes WHERE user_id = ? OR task_id IN (SELECT task_id FROM tasks WHERE user_id = ?)`,
      [user_id, user_id]
    );
    await pool.query(`DELETE FROM evaluations WHERE user_id = ?`, [user_id]);
    await pool.query(`DELETE FROM annotations WHERE user_id = ?`, [user_id]);
    await pool.query(`DELETE FROM tasks WHERE user_id = ?`, [user_id]);

    // Finalmente, eliminar el usuario
    await pool.query(`DELETE FROM users WHERE user_id = ?`, [user_id]);

    return {
      message:
        "El usuario y sus datos asociados han sido eliminados con éxito.",
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
