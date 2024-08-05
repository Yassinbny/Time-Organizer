import getPool from "../../db/getpool.js";

async function getTaskById(task_id) {
    const pool = await getPool();
    const [rows] = await pool.query("SELECT * FROM tasks WHERE task_id = ?", [task_id]);
    return rows[0] || null;  // Retorna la tarea si existe, o null si no.
}

export { getTaskById };

export default async function postponeTaskModel (task_id, daysToPostpone=0, hoursToPostpone=0) {
    try {
        const pool = await getPool();
        
        const task = await getTaskById(task_id);

        if (!task) {
            throw new Error("Task not found");
          }
      
          let newFinishOn = new Date(task.finish_on);

        //postpone per days
        if(daysToPostpone > 0){
            newFinishOn.setDate(newFinishOn.getDate() + daysToPostpone);
        }
        //postpone per hours
        if(hoursToPostpone > 0){
            newFinishOn.setHours(newFinishOn.getHours() + hoursToPostpone);
        }

        const newFinishOnString = newFinishOn.toISOString().slice(0, 19).replace('T', ' ');

        const [result] = await pool.query (`UPDATE tasks SET finish_on = ? WHERE task_id = ?`, [newFinishOnString, task_id]);

        return {
            message: result.changedRows ? "Task postponed successfully." : "No changes were made."
        }
        
    } catch (error) {
        console.log("Error postponing task",error);
        throw error;
    }
}