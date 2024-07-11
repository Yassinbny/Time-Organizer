import getPool from "../db/getpool.js";

export default async function postponeAllTasksModel (start_on, finish_on) {
    try {
        const pool = await getPool();

        const [result] = await pool.query (`UPDATE tasks SET start_on = ?, finish_on = ?`, [start_on, finish_on]);

        return {
            message: result.changedRows ? "All tasks postponed successfully." : "No changes were made."
        }
        
    } catch (error) {
        console.log("Error updating task rating:",error);
        throw error;
    }
}