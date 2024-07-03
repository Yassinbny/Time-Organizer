import getPool from "../db/getpool.js";

export default async function finishSubTaskModel(subTask_id){
    try {
        //hacemos la conexción con la base de datos
        const pool = await getPool();

        //hacemos la consulta con la cual mandaremos la informacvión obtenida por argumentos para finalizar la tarea
        const [result] = await pool.query (
            `UPDATE subtask
            SET done = true
            WHERE subtask_id = ?`
            ,[subTask_id]
        );

        //Retornamos la subtarea
        return { result };
    } catch (error) {
        throw error;
    }
}