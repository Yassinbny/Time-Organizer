import getPool from "../../db/getpool.js";

export default async function listTaskModel(
  currentUser,
  search = 0,
  sort = 0,
  order = 0
) {
  try {
    const pool = await getPool();
    let query = `SELECT 
    t.*,  
    f.name AS family_name,
    c.name AS color_name
FROM 
    task_color_family tcf
JOIN 
    tasks t ON tcf.task_id = t.task_id
JOIN 
    colors c ON tcf.color_id = c.color_id
JOIN 
    family f ON tcf.family_id = f.family_id 
    where user_id= ${currentUser.id} `;

    // Búsqueda
    if (search) {
      query += ` and (title like "%${search}%" OR description like "%${search}%") `;
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
