import getPool from "../db/getpool.js";

export default async function postponeTaskModel (task_id, finish_on, daysToPostpone=0, hoursToPostpone=0) {
    try {
        const pool = await getPool();

        let newFinishOn = new Date(finish_on);

        //postpone per days
        if(daysToPostpone > 0){
            newFinishOn.setDate(newFinishOn.getDate() + daysToPostpone);
        }
        //postpone per hours
        if(hoursToPostpone > 0){
            newFinishOn.setHours(newFinishOn.getHours() + hoursToPostpone);
        }

        const newFinishOnString = newFinishOn.toISOString().slice(0, 19).replace('T', ' ');

        const [result] = await pool.query (`UPDATE tasks SET finish_on = ? WHERE id = ?`, [newFinishOnString, task_id]);

        return {
            message: result.changedRows ? "Task postponed successfully." : "No changes were made."
        }
        
    } catch (error) {
        console.log("Error postponing task",error);
        throw error;
    }
}