import getPool from "../../db/getpool.js";
// creamos el modelo de lo que va a hacer el endpoint de creacion de tarea
export default async function createTaskModel(
  currentUser,
  title,
  description,
  start_on,
  finish_on,
  family_id,
  color_id
) {
  try {
    // hacemos la conexion con la base de datos
    const pool = await getPool();

    // hacemos la consulta con la cual mandaremos la informacion obtenida por argumentos para crear la tarea
    const [task] = await pool.query(
      `INSERT INTO tasks(title, description, user_id,start_on,finish_on,family_id, color_id) 
            VALUES(?,?,?,?,?)`,
      [title, description, currentUser, start_on, finish_on, family_id, color_id]
    );

    // retornamos la tarea
    return { task };
  } catch (error) {
    throw error;
  }
}
