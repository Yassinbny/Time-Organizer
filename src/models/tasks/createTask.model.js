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
      `INSERT INTO tasks(title, description, user_id, start_on,finish_on ) 
            VALUES(?,?,?,?,?)`,
      [title, description, currentUser, start_on, finish_on]
    );
    console.log(task.insertId);

    const res = await pool.query(
      `INSERT INTO task_color_family (task_id, color_id, family_id) VALUES
  (?,?,?)`,
      [task.insertId, color_id, family_id]
    );

    // retornamos la tarea
    return { task, res };
  } catch (error) {
    throw error;
  }
}
