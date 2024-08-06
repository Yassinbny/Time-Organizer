import getPool from "../../db/getPool.js";

export default async function createTaskFamilyModel(
  name,
  color = "blanco",
  task_id
) {
  try {
    const pool = await getPool();
    const [taskFamily] = await pool.query(
      `INSERT INTO family(name,color,task_id)values(?,?,?)`,
      [name, color, task_id]
    );
    return { taskFamily };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
