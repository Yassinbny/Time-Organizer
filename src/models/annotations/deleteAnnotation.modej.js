import getPool from "../../db/getpool.js";

export default async function deleteAnnotationModel(annotation_id) {
  try {
    const pool = await getPool();

    const [result] = await pool.query(`DELETE FROM annotations
WHERE annotation_id = ? `, [annotation_id]);

console.log(result.changedRows);
    return {
      message: result.affectedRows
        ? "La anotación ha sido eliminada con éxito."
        : "No existe ninguna anotación con ese id.",
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}