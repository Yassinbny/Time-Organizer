import bcrypt from "bcrypt";
import getPool from "../../db/getpool.js";
import { notFoundError, newPassError, confirmPassError } from "../../services/errorServices.js";

const ChangeForgotPasswordModel = async (email, recoverPassCode, newPassword, confirmPassword) => {
  try {
    const pool = await getPool();

        // Verificar si las contraseñas coinciden
        if (newPassword !== confirmPassword) {
          throw confirmPassError(); // Lanza un error si las contraseñas no coinciden
        }

    // Consultar si el email y el código de recuperación son válidos
    const [[user]] = await pool.query(
      `SELECT * FROM users WHERE email = ? AND recoverPassCode = ?`,
      [email, recoverPassCode]
    );

    if (!user) {
      throw notFoundError("El código de recuperación es inválido o el correo electrónico no está registrado.");
    }

    // Comparar la nueva contraseña con la contraseña actual almacenada
    const isSamePassword = await bcrypt.compare(newPassword, user.password);

    if (isSamePassword) {
      throw newPassError();  // La nueva contraseña no debe ser igual a la anterior
    }

    // Hasheamos la nueva contraseña para guardarla en la DB sustituyendo la anterior
    const hashedNewPass = await bcrypt.hash(newPassword, 10);

    await pool.query(
      `UPDATE users SET password = ?, recoverPassCode = NULL WHERE email = ?`,
      [hashedNewPass, email]
    );

  } catch (error) {
    throw error;
  }
};

export default ChangeForgotPasswordModel;