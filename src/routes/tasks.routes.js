import express from "express";

import {
  createTaskController,
  listTaskController,
  listTaskByIdcontroller,
  createNoteController,
  createSubTaskController,
  createTaskFamilyController,
  finishTaskController,
  updateNoteController,
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
  .post("/:idTask/family", createTaskFamilyController)
  .post("/:idTask", finishTaskController);

export default router;
