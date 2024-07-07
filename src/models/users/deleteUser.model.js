import getPool from "../../db/getpool.js";

export default async function deleteUserModel(username) {
    const pool = await getPool();

    try {
        await pool.query(`DELETE FROM users WHERE username = ?`, [username]);

        return {
            message: "Usuario eliminado con éxito"
        };
    } catch (error) {
        console.log(error);
        throw error;
    }
}
