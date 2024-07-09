import getPool from "../../db/getpool.js";

export default async function listUsersModel() {
    const pool = await getPool();

    try {
        const [rows] = await pool.query("SELECT user_id, username, email, role, enabled FROM users");
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
