import express from "express";

import {
  createTaskController,
  listTaskController,
  listTaskByIdcontroller,
} from "../controllers/index.js";

const router = express.Router();

// tasks

router
  .get("/", listTaskController)
  .get("/:idPost", listTaskByIdcontroller)
  .post("/", createTaskController);

export default router;
