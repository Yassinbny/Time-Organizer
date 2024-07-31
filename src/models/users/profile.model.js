import getPool from "../../db/getpool.js";
import { notFoundError } from "../../services/errorServices.js";

const profileModel = async function(userId) {

    try {
        const pool = await getPool();

        const [user] = await pool.query(`SELECT username, email, password, avatar FROM users WHERE user_id = ? `, [userId]);

        if (!user) {
            notFoundError("user");
          }
          console.log(user); 

        return user;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default profileModel;