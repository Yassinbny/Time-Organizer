import getPool from "../../db/getpool.js";

const selectUserByIdModel = async (userId) => {
    const pool = await getPool();

    //Comprobar si hay algún usuario con ese id.
    const [users] = await pool.query(`SELECT user_id, username, email, avatar, imageBoard, role FROM users WHERE user_id = ?`, [userId]);

    return users[0];
};

export default selectUserByIdModel;