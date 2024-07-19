import getPool from "../../db/getpool.js";

export default async function updateAnnotationModel(title, description, idAnnotation) {
    try {
      const pool = await getPool();
      const [result] = await pool.query(
        ` UPDATE annotations SET 
        title = ?,
        description = ?
          WHERE annotation_id = ?`,
        [title, description, idAnnotation]
      );
      console.log(result.changedRows);
      return {
        message: result.changedRows ? "Cambio realizado con éxito." : "No hubo cambios.",
      };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }