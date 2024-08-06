import getPool from "../../db/getPool.js";

export default async function listColorsModel(search = 0, sort = 0, order = 0) {
  try {
    const pool = await getPool();
    let query = "SELECT * FROM colors";

    // Búsqueda
    if (search) {
      query += ` WHERE name = "%${search}%" `;
    }

    // Ordenación
    if (sort) {
      query += ` ORDER BY ${sort} ${order}`;
    }

    const [colors] = await pool.query(query);
    return { colors };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
