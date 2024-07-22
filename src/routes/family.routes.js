import express from "express";

import {
  createTaskFamilyController,
  listTaskFamilyController,
} from "../controllers/tasks/index.js";
import authenticateToken from "../middlewares/authenticateToken.js";

const router = express.Router();

router
  .get("/", authenticateToken, listTaskFamilyController)
  .post("/:idTask", authenticateToken, createTaskFamilyController);

export default router;
