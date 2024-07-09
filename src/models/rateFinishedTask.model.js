import getPool from "../db/getpool.js";

export default async function rateFinishedTaskModel (task_id, rating) {

    try {
        const pool = await getPool();

        const [result] = await pool.query (`UPDATE tasks SET rating = ? WHERE task_id = ? AND done = true`, [rating, task_id]);

        return {result}
        
    } catch (error) {
        console.log("Error updating task rating:",error)
        throw error;
    }
}