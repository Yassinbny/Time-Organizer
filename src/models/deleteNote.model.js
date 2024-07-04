import getPool from "../db/getpool.js";

export default async function deleteNoteModel(note_id) {
  try {
    const pool = await getPool();

    const [result] = await pool.query(`DELETE FROM notes
WHERE note_id = 1 `);
    return {
      message: result.affectedRows
        ? "la nota ha sido eliminada con exito"
        : "no existe ninguna nota con ese id",
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
