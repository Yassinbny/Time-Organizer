import getPool from "../../db/getpool.js";

const avatarModel = async (avatarName, userId) => {

  try {
    const pool = await getPool();

    //Actualizar avatar en DB.
    await pool.query(`UPDATE users SET avatar = ? WHERE user_id = ?`, [
      avatarName,
      userId,
    ]);
    
  } catch (err) {
    throw err;
  }
};

export default avatarModel;