import express from "express";
import { listCompletedTasksController } from "../controllers/tasks/index.js";
import { authenticateToken } from "../middlewares/index.js";

const router = express.Router();

router.get("/", authenticateToken, listCompletedTasksController);

export default router;
