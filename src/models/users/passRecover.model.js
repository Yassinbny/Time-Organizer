import getPool from "../../db/getpool.js";
import { invalidCredentialsError } from "../../services/errorServices.js";

const passRecoverModel = async (email, recoverPassCode) => {
  try{
    const pool = await getPool();

    //Para que compruebe que el email está en la DB
    const [users] = await pool.query(`SELECT user_id, recoverPassCode FROM users WHERE email = ?`, [email]);

    const user = users[0];
    if (!user) {
      invalidCredentialsError();
    }

    //Actualiza el campo recoverPassCode
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
