import express from "express";
import { listColorsController } from "../controllers/tasks/index.js";
import authenticateToken from "../middlewares/authenticateToken.js";

const router = express.Router();

router.get("/", authenticateToken, listColorsController);

export default router;