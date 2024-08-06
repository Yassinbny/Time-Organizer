import getPool from "../../db/getPool.js";

export default async function listTaskFamilyModel() {
  try {
    const pool = await getPool();

    const [taskFamilies] = await pool.query(`SELECT * FROM family`);
    return { taskFamilies };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
