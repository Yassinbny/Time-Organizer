import getPool from "../../db/getpool.js";
import { notFoundError } from "../../services/errorServices.js";
import { signInModel } from "../auth/index.js";

const passRecoverModel = async (email, recoverPassCode) => {
  try {
    const pool = await getPool();

    const user = await pool.query(`SELECT * FROM users where email=?`, [email]);

    if (!user) {
      notFoundError("usuario");
    }

    const [result] = await pool.query(
      `UPDATE users SET recoverPassCode = ? WHERE email = ?`,
      [recoverPassCode, email]
    );

    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default passRecoverModel;
