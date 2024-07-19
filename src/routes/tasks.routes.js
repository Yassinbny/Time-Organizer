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
  postponeTaskController,
  postponeAllTasksController,
  deleteTaskcontroller,
} from "../controllers/tasks/index.js";
import authenticateToken from "../validations/authenticateToken.js";

const router = express.Router();

//tasks
authenticateToken;
router
  .get("/", authenticateToken, listTaskController)
  .get("/:idTask", authenticateToken, listTaskByIdcontroller)
  .post("/", authenticateToken, createTaskController)
  .patch("/timePassed", authenticateToken, finishTaskByTimeController)
  .post("/:idTask/notes", authenticateToken, createNoteController)
  .delete("/:idTask/notes/:idNote", authenticateToken, deleteNotecontroller)
  .patch("/:idTask/notes/:idNote", authenticateToken, updateNoteController)
  .post("/:idTask/subtask", authenticateToken, createSubTaskController)
  .post("/:idTask", authenticateToken, finishTaskController)
  .post("/:idTask/rating", authenticateToken, rateFinishedTaskController)
  .post(
    "/:idTask/subtask/:idSubTask",
    authenticateToken,
    finishSubTaskController
  )
  .post(
    "/:idTask/subtask/:idSubTask",
    authenticateToken,
    finishSubTaskController
  )
  .patch("/:idTask", authenticateToken, updateTaskController)
  .patch(":idTask/postpone", authenticateToken, postponeTaskController)
  .patch("/postponeAll", authenticateToken, postponeAllTasksController)
  .delete("/:idTask", authenticateToken, deleteTaskcontroller);

export default router;
