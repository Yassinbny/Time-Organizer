import getPool from "../../db/getpool.js";

export default async function confirmUserModel(validationCode) {
  try {
    const pool = await getPool();

    const [[user]] = await pool.query(`SELECT * FROM users WHERE token = ?`, [
      validationCode,
    ]);

    if (!user)
      throw {
        status: 400,
        message: "Token no válido.",
        code: "BAD REQUEST",
      };

    await pool.query(`UPDATE users SET token = ? WHERE token = ?`, [
      null,
      validationCode,
    ]);

    return {
      message: "Registro completado con éxito.",
    };
  } catch (error) {
    throw error;
  }
}
