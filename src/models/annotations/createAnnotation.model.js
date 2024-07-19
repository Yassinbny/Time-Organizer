import getPool from "../../db/getpool.js";

export default async function createAnnotationModel(
  currentUser,
  title,
  description
) {
  try {

    const pool = await getPool();

    const [annotation] = await pool.query(
      `INSERT INTO annotations(title, description, user_id) 
            VALUES(?,?,?)`,
      [title, description, currentUser]
    );

    // retornamos la anotación
    return { annotation };
  } catch (error) {
    throw error;
  }
}