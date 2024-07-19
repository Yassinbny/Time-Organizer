import getPool from "../../db/getpool.js";

export default async function listTaskModel(search = 0, sort = 0, order = 0) {
  try {
    const pool = await getPool();
    let query = "SELECT * FROM tasks";

    // Búsqueda
    if (search) {
      query += ` WHERE (title = "${search}" OR description = "${search}")`;
      // queryParams.push(`%${search}%`, `%${search}%`);
    }

    // Ordenación
    if (sort) {
      query += ` ORDER BY ${sort} ${order}`;
    }

    const [tasks] = await pool.query(query);
    return { tasks };
  } catch (error) {
    console.log(error);
  }
}
