import { hash } from "bcrypt";
import getPool from "../db/getpool.js";
import generateToken from "../services/generateToken.js";
import { ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_USER } from "../../env.js";
export default async function generateAdmin() {
  try {
    let pool = await getPool();
    //Generar token aleatorio.
    const signUpCode = generateToken();

    //Hashear la contraseña.
    const hashedPassword = await hash(ADMIN_PASSWORD, 10);
    await pool.query(
      `INSERT INTO users(username, email, password,role,enabled) VALUES(?,?,?,?,true)`,
      [ADMIN_USER, ADMIN_EMAIL, hashedPassword, "admin"]
    );
  } catch (error) {
    console.log(error);
  }
}
