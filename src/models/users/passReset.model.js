import { hash } from "bcrypt";
import { recoveryCodeError } from "../../services/errorServices.js";
import { signInModel } from "../auth/index.js";
import getPool from "../../db/getpool.js";

const updatePasswordModel = async function (
  email,
  recoverPassCode,
  newPassword
) {
  try {
    const pool = await getPool();
    const hashedPass = await hash(newPassword, 10);

    await pool.query(
      `UPDATE users SET password = ?, recoverPassCode = null WHERE recoverPassCode = ?`,
      [hashedPass, recoverPassCode]
    );
    const user = await signInModel(email, newPassword);
    if (!user) {
      recoveryCodeError();
    }
    return { user };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default updatePasswordModel;
