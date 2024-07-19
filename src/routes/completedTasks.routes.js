import express from "express";
import { listCompletedTasksController } from "../controllers/tasks/index.js";
import authenticateToken from "../validations/authenticateToken.js";

const router = express.Router();

router.get("/", authenticateToken, listCompletedTasksController);

export default router;
