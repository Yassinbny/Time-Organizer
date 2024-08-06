import getPool from "../../db/getPool.js";

export default async function signInModel(email, password) {
  try {
    const pool = await getPool();
    const [[user]] = await pool.query(`SELECT * FROM users WHERE email = ?`, [
      email,
    ]);

    return {
      user,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
