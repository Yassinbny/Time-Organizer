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
import checkUser from "../validations/checkUser.js";

const router = express.Router();

//tasks

router
  .get("/", listTaskController)
  .get("/:idTask", listTaskByIdcontroller)
  .post("/", checkUser, createTaskController)
  .patch("/timePassed", finishTaskByTimeController)
  .post("/:idTask/notes", createNoteController)
  .delete("/:idTask/notes/:idNote", deleteNotecontroller)
  .patch("/:idTask/notes/:idNote", updateNoteController)
  .post("/:idTask/subtask", createSubTaskController)
  .post("/:idTask", finishTaskController)
  .post("/:idTask/rating", rateFinishedTaskController)
  .post("/:idTask/subtask/:idSubTask", finishSubTaskController)
  .post("/:idTask/subtask/:idSubTask", finishSubTaskController)
  .patch("/:idTask", updateTaskController)
  .patch(":idTask/postpone", postponeTaskController)
  .patch("/postponeAll", postponeAllTasksController)
  .delete("/:idTask", deleteTaskcontroller);

export default router;
