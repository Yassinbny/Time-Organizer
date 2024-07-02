import express from "express";

import {
  createTaskController,
  listTaskController,
  listTaskByIdcontroller,
  createNoteController,
} from "../controllers/index.js";

const router = express.Router();

//tasks

router
  .get("/", listTaskController)
  .get("/:idPost", listTaskByIdcontroller)
  .post("/", createTaskController)
  .post("/notes", createNoteController);

export default router;
