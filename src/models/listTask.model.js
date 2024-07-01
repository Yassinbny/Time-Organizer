import getPool from "../db/getpool.js";

export default async function listTaskModel(search, sort, order) {
  try {
    const pool = await getPool();
    let query = "SELECT * FROM tasks";
    const queryParams = [];

    // Búsqueda
    if (search) {
      query += ` WHERE (title LIKE "${search}" OR description LIKE "${search}")`;
      // queryParams.push(`%${search}%`, `%${search}%`);
    }

    // Ordenación
    if (sort) {
      const orderDirection = order === "desc" ? "DESC" : "ASC";
      query += ` ORDER BY ${sort} ${order}`;
    }

    const [tasks] = await pool.query(query);
    return { tasks };
  } catch (error) {
    console.log(error);
  }
}
