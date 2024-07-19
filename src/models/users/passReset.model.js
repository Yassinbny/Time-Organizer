import { hash } from "bcrypt";
import { notFoundError } from "../../services/errorServices.js";
import { signInModel } from "../../models/auth/index.js";
import getPool from "../../db/getpool.js";

const updatePasswordModel = async function (
  email,
  password,
  newPassword
) {

  try {
    
    const pool = await getPool();

    const hashedPass = await hash(newPassword, 10);

    await pool.query(
      `UPDATE users SET email = ?, password = ? WHERE password = ?`,
      [hashedPass, password, email]
    );

    const user = await signInModel(email, password);

    if (!user) {
      notFoundError();
    }

    return { user };
      
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default updatePasswordModel;
