import getPool from "../../db/getpool.js";

export default async function postponeAllTasksModel(
  daysToPostpone = 0,
  hoursToPostpone = 0
) {
  try {
    const pool = await getPool();

    // Obtener todas las tareas desde la base de datos
    const [tasks] = await pool.query(`SELECT task_id, finish_on FROM tasks`);

    if (tasks.length === 0) {
      return { message: "No se encontró ninguna tarea para posponer." };
    }

    let updateCount = 0;

    //postpone a task
    for (const task of tasks) {
      let newFinishOn = new Date(task.finish_on);

      //postpone per days
      if (daysToPostpone > 0) {
        newFinishOn.setDate(newFinishOn.getDate() + daysToPostpone);
      }
      //postpone per hours
      if (hoursToPostpone > 0) {
        newFinishOn.setHours(newFinishOn.getHours() + hoursToPostpone);
      }

      const newFinishOnString = newFinishOn
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");

      const [result] = await pool.query(
        `UPDATE tasks SET finish_on = ? WHERE task_id = ?`,
        [newFinishOnString, task.task_id]
      );

      if (result.affectedRows) {
        updateCount++;
      }
    }

    //return {
    // message: result.changedRows ? "Tarea pospuesta con éxito." : "No se realizaron cambios."
    //};
    return {
      message:
        updateCount > 0
          ? "Tareas pospuestas con éxito."
          : "No se realizaron cambios.",
    };
  } catch (error) {
    console.log("Error al posponer tareas", error);
    throw error;
  }
}
