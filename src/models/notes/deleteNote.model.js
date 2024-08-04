import getPool from "../../db/getpool.js";
import verifyOwner from "../../middlewares/verifyOwner.js";

export default async function deleteNoteModel(currentUser, note_id) {
  try {
    const pool = await getPool();
    const [[note]] = await pool.query(`select * from notes where note_id=?`, [
      note_id,
    ]);
    verifyOwner(note, currentUser.id);
    const [result] = await pool.query(
      `DELETE FROM notes
WHERE note_id = ? `,
      [note_id]
    );
    return {
      message: result.affectedRows
        ? "La nota ha sido eliminada con éxito."
        : "No existe ninguna nota con ese id.",
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
