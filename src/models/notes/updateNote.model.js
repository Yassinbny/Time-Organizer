import getPool from "../../db/getpool.js";
import verifyOwner from "../../middlewares/verifyOwner.js";

export default async function updateNoteModel(
  description,
  currentUser,
  idNote
) {
  try {
    const pool = await getPool();

    const [[note]] = await pool.query(`select * from notes where note_id=?`, [
      idNote,
    ]);

    verifyOwner(note, currentUser.id);
    const [result] = await pool.query(
      ` UPDATE notes SET description = ?
        WHERE note_id = ?`,
      [description, idNote]
    );
    console.log(result.changedRows);
    return {
      message: result.changedRows
        ? "Cambio realizado con éxito."
        : "No hubo cambios.",
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
