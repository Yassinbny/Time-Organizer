import { hash } from 'bcrypt';
import getPool from '../../db/getpool.js';


export default async function signUpModel(username, email, password, signUpCode) {
  const pool = await getPool();

  try {
    // Verificar si el usuario o el correo ya están registrados.
    const [[user]] = await pool.query(
      `SELECT * FROM users WHERE username = ? OR email = ?`,
      [username, email]
    );

    if (user) {
      if (user.email === email) {
        return { ok: false, message: "El correo ya está siendo usado por otra cuenta." };
      }
      return { ok: false, message: "El nombre de usuario ya está en uso." };
    }

    // Hashear la contraseña.
    const hashedPassword = await hash(password, 10);

    // Registrar el usuario.
    await pool.query(
      `INSERT INTO users (username, email, password, token) VALUES (?, ?, ?, ?)`,
      [username, email, hashedPassword, signUpCode]
    );

    return {
      ok: true,
      message: "Usuario creado correctamente. Te llegará un email con el link para completar tu registro."
    };

  } catch (error) {
    console.error("Error en el modelo de registro de usuario", error);
    throw error;
  }
}
