import getPool from "../db/getpool.js";

export default async function postponeTaskModel (task_id, start_on, finish_on) {
    try {
        const pool = await getPool();

        const [result] = await pool.query (`UPDATE tasks SET start_on = ?, finish_on = ? WHERE task_id = ?`, [start_on, finish_on, title]);

        return {
            message: result.changedRows ? "Task postponed successfully." : "No changes were made."
        }
        
    } catch (error) {
        console.log("Error updating task rating:",error);
        throw error;
    }
}