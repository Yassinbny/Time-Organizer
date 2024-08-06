import getPool from "../../db/getpool.js";

export default async function updateUserStatusModel(username, status) {
    const pool = await getPool();

    try {
        await pool.query(`UPDATE users SET enabled = ? WHERE username = ?`, [status, username]);

        return {
            message: `Estado del usuario ${username} actualizado con éxito`
        };
    } catch (error) {
        console.log(error);
        throw error;
    }
}
