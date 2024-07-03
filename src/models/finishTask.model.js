import getPool from "../db/getpool.js";

export default async function finishTaskModel(id) {
    try {
        // hacemos la conexión con la base de datos
        const pool = await getPool();

        //hacemos la consulta con la cual mandaremos la información obtenida por argumentos para finalizar la tarea
        const [result] = await pool.query (
            `UPDATE tasks 
            SET done = true
            WHERE task_id = ?`
            ,[id]
        );

        // retornamos la tarea
        return {result};  
    } catch (error) {
        throw error;
    }
}