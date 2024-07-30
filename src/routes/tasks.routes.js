import express from "express";
import {
  createNoteController,
  updateNoteController,
  deleteNotecontroller,
} from "../controllers/notes/index.js";

import {
  createTaskController,
  listTaskController,
  listTaskByIdcontroller,
  createSubTaskController,
  finishTaskController,
  finishSubTaskController,
  finishTaskByTimeController,
  rateFinishedTaskController,
  updateTaskController,
  deleteTaskcontroller,
  postponeTaskController,
  postponeAllTasksController,
  listCompletedTasksController,
} from "../controllers/tasks/index.js";

import { authenticateToken } from "../middlewares/index.js";

const router = express.Router();

//tasks
router
  // Listar Tareas
  .get("/", authenticateToken, listTaskController)

  // Listar Tareas con ID
  .get("/:idTask", authenticateToken, listTaskByIdcontroller)

  // Crear Tarea
  .post("/", authenticateToken, createTaskController)

  // Finalizar Tarea con ID
  .patch("/timePassed", authenticateToken, finishTaskByTimeController)

  // Crear Nota
  .post("/:idTask/notes", authenticateToken, createNoteController)

  // Eliminar Nota
  .delete("/notes/:idNote", authenticateToken, deleteNotecontroller)

  // Actualizar/Modificar Nota
  .patch("/notes/:idNote", authenticateToken, updateNoteController)

  // Crear subTarea
  .post("/:idTask/subtask", authenticateToken, createSubTaskController)

  // Finalizar tarea
  .post("/:idTask", authenticateToken, finishTaskController)

  // Valoración de Tareas Finalizadas
  .post("/:idTask/rating", authenticateToken, rateFinishedTaskController)

  // Finalizar subTarea
  .post("/subtask/:idSubTask", authenticateToken, finishSubTaskController)

  // Actualización/Modificación de Tarea
  .patch("/:idTask", authenticateToken, updateTaskController)

  // Postponer una tarea
  .patch("/:idTask/postpone", authenticateToken, postponeTaskController)

  // Postponer Todas las tareas
  .patch("/postponeAll", authenticateToken, postponeAllTasksController)

  // Eliminar Tarea
  .delete("/:idTask", authenticateToken, deleteTaskcontroller)
  // listar tareas completadas
  .get("/", authenticateToken, listCompletedTasksController);

export default router;
