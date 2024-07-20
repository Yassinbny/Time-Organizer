import getPool from "../../db/getpool.js";
import { notFoundError, invalidCredentialsError, newUsernameError } from "../../services/errorServices.js";


const editUsernameModel = async function (userId, username, newUsername) {

  try {
    
    const pool = await getPool();

    //Vemos si el usuario está en la DB.
    const [[user]] = await pool.query(
      `SELECT * FROM users WHERE user_id = ?`, [userId]
    );

    if (!user) {
      notFoundError("user");
    };

    //Comprobamos que el username coincida con el del registro.
    if (username !== user.username) {
      invalidCredentialsError();
    };

    //Comprobamos que el nuevo username no esté ya en uso en la DB.
    const generalUsers = await pool.query(`SELECT * FROM users WHERE username = ?`, [newUsername]);

    //Si no está registrado, lo guardaremos en la DB eliminando el anterior.      
    if(newUsername === user.username || newUsername === generalUsers) {
        newUsernameError();
    } else {
        await pool.query(`UPDATE users SET username = ? WHERE user_id = ?`, [newUsername, userId]);
    } 
    return { newUsername };

  } catch (error) {
    throw error;
  }
};

export default editUsernameModel;