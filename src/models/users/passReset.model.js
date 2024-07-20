import { hash, compare } from "bcrypt";
import getPool from "../../db/getpool.js";
import { 
  notFoundError, invalidCredentialsError, 
  newPassError 
} from "../../services/errorServices.js";


const updatePasswordModel = async function (
  userId,
  password,
  newPassword
) {

  try {
    const pool = await getPool();

    //Consultamos a la DB si existe el usuario.
    const [[user]] = await pool.query(`SELECT * FROM users WHERE user_id = ?`, [userId]);

    if (!user) {
      notFoundError("user");   
    };

    //Comparamos la contraseña con la almacenada en la DB.
    const validPass = await compare(password, user.password);

    if(!validPass) {
      throw invalidCredentialsError();
    };

    //Nos aseguramos de que la nueva contraseña no sea igual que la anterior.
    const comparePass = await compare(newPassword, user.password);

    if (comparePass){
      throw newPassError();
    }
    
    //Hasheamos la nueva contraseña para guardarla en la DB sustituyendo la anterior.
    const hashedNewPass = await hash(newPassword, 10);

    await pool.query(
      `UPDATE users SET password = ? WHERE user_id = ?`,
      [hashedNewPass, userId]
    );
      
  } catch (error) {
    throw error;
  }
};

export default updatePasswordModel;
