import getPool from "../../db/getpool.js";

// Función que realiza una consulta a la base de datos para actualizar la imagen de un usuario.
const uploadImageModel = async (imageName, userId) => {
  try {
    const pool = await getPool();

    //Actualizamos avatar en la tabla users.
    await pool.query(`UPDATE users SET imageBoard = ? WHERE user_id = ?`, [
      imageName,
      userId,
    ]);
  } catch (err) {
    throw err;
  }
};

export default uploadImageModel;
