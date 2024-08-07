import getPool from "../../db/getPool.js";
import verifyOwner from "../../middlewares/verifyOwner.js";

export default async function deleteSubtaskModel(subtask_id) {
  try {
    const pool = await getPool();

    const [result] = await pool.query(
      `DELETE FROM subtask
WHERE subtask_id = ? `,
      [subtask_id]
    );

    console.log(result.changedRows);
    return {
      message: result.affectedRows
        ? "La subtarea ha sido eliminada con éxito."
        : "No existe ninguna subtarea con ese id.",
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
