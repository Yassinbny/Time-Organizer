import express from "express";

import {
  createTaskController,
  listTaskController,
  listTaskByIdcontroller,
  createNoteController,
  createSubTaskController,
  finishTaskController,
  updateNoteController,
  finishSubTaskController,
} from "../controllers/index.js";

const router = express.Router();

//tasks

router
  .get("/", listTaskController)
  .get("/:idTask", listTaskByIdcontroller)
  .post("/", createTaskController)
  .post("/:idTask/notes", createNoteController)
  .patch("/:idTask/notes/:idNote", updateNoteController)
  .post("/:idTask/subtask", createSubTaskController)
  .post("/:idTask", finishTaskController)
  .post("/:idTask/subtask/:idSubTask", finishSubTaskController);

export default router;
