import express from "express";
import {
  createNoteController,
  updateNoteController,
  deleteNotecontroller,
} from "../controllers/notes/index.js";

import {
  createTaskController,
  listTaskController,
  showTaskDetailByIdController,
  createSubTaskController,
  finishTaskController,
  finishSubTaskController,
  finishTaskByTimeController,
  rateFinishedTaskController,
  updateTaskController,
  deleteTaskcontroller,
  postponeTaskController,
  listCompletedTasksController,
  postponeAllTasksController,
} from "../controllers/tasks/index.js";

import { authenticateToken } from "../middlewares/index.js";

const router = express.Router();

//tasks
  // Listar Tareas
  router.get("/", authenticateToken, listTaskController)

  // Listar Tareas con ID
  router.get("/:idTask", authenticateToken, showTaskDetailByIdController)

  // Crear Tarea
  router.post("/", authenticateToken, createTaskController)

  // Finalizar Tarea con ID
  router.patch("/timePassed", authenticateToken, finishTaskByTimeController)

  // Crear Nota
  router.post("/:idTask/notes", authenticateToken, createNoteController)

  // Eliminar Nota
  router.delete("/notes/:idNote", authenticateToken, deleteNotecontroller)

  // Actualizar/Modificar Nota
  router.patch("/notes/:idNote", authenticateToken, updateNoteController)

  // Crear subTarea
  router.post("/:idTask/subtask", authenticateToken, createSubTaskController)

  // Finalizar tarea
  router.post("/:idTask", authenticateToken, finishTaskController)

  // Valoración de Tareas Finalizadas
  router.post("/:idTask/rating", authenticateToken, rateFinishedTaskController)

  // Finalizar subTarea
  router.post("/subtask/:idSubTask", authenticateToken, finishSubTaskController)

  // Postponer Todas las tareas
  router.patch("/postponeAll", authenticateToken, postponeAllTasksController)

  // Actualización/Modificación de Tarea
  router.patch("/:idTask", authenticateToken, updateTaskController)

  // Postponer una tarea
  router.patch("/:idTask/postpone", authenticateToken, postponeTaskController)


  // Eliminar Tarea
  router.delete("/:idTask", authenticateToken, deleteTaskcontroller)
  // listar tareas completadas
  router.get("/", authenticateToken, listCompletedTasksController);

export default router;
