import getPool from "../../db/getpool.js";
import { notFoundError } from "../../services/errorServices.js";

const adminProfileModel = async function(userId) {

    try {
        const pool = await getPool();

        const [user] = await pool.query(`SELECT username, email, password, avatar FROM users WHERE user_id = ? AND role = ?`, [userId, admin]);

        if (!user) {
            notFoundError("admin");
          }
          console.log(user); 

        return user;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default adminProfileModel;