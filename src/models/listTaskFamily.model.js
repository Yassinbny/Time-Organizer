import getPool from "../db/getpool.js";

export default async function listTaskFamilyModel(search = 0, sort = 0, order = 0) {
  try {
    const pool = await getPool();
    let query = "SELECT * FROM family"; 

    // Búsqueda
    if (search) {
      query += ` WHERE (name LIKE "%${search}%" OR color LIKE "%${search}%")`;
    }

    // Ordenación
    if (sort) {
      query += ` ORDER BY ${sort} ${order}`;
    }

    const [taskFamilies] = await pool.query(query);
    return { taskFamilies };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
