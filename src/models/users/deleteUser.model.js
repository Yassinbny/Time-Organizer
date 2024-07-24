import getPool from "../../db/getpool.js";

export default async function deleteUserModel(user_id) {



    const pool = await getPool();

    try {
        const [result] = await pool.query(`DELETE FROM tasks WHERE user_id = ?`, [user_id]);
        await pool.query(`DELETE FROM users WHERE user_id = ?`, [user_id]);

        return {
            message: "El usuario y sus tareas han sido eliminados con éxito."
        };
        
    } catch (error) {
        console.log(error);
        throw error;
    }
}