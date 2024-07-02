import express from "express";

import {
  createTaskController,
  listTaskController,
  listTaskByIdcontroller,
  createNoteController,
  createSubTaskController,
  createTaskFamilyController,
} from "../controllers/index.js";

const router = express.Router();

//tasks

router
  .get("/", listTaskController)
  .get("/:idTask", listTaskByIdcontroller)
  .post("/", createTaskController)
  .post("/notes", createNoteController)
  .post("/:idTask/subtask", createSubTaskController)
  .post("/:idTask/family", createTaskFamilyController);

export default router;
