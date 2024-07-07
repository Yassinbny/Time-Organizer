import getPool from "../db/getpool.js";

export default async function updateNoteModel(description, idNote) {
  try {
    const pool = await getPool();
    const [result] = await pool.query(
      ` UPDATE notes SET description = ?
        WHERE note_id = ?`,
      [description, idNote]
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
