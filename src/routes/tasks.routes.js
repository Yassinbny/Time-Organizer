import express from "express";

import {
  createTaskController,
  listTaskController,
} from "../controllers/index.js";

const router = express.Router();

// tasks

router.get("/", listTaskController).post("/", createTaskController);

export default router;
