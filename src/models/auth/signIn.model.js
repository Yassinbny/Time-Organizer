import { JWT_SECRET } from "../../../env.js";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import getPool from "../../db/getpool.js";

export default async function signInModel(email, password) {
  try {
    const pool = await getPool();
    const [[user]] = await pool.query(
      `SELECT * FROM users WHERE email LIKE ?`,
      [email]
    );

    if (!user)
      throw {
        status: 400,
        message: "Credenciales inválidas [email]",
        code: "BAD REQUEST",
      };

    const isValidPassword = await compare(password, user.password);

    if (!isValidPassword)
      throw {
        status: 400,
        message: "Credenciales inválidas [Password]",
        code: "BAD REQUEST",
      };

    const token = jwt.sign(
      {
        id: user.user_id,
        username: user.username,
        email: user.email,
      },
      JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );
    return {
      token,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
