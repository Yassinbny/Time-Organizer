import express from "express";

import { createTaskController } from "../controllers/index.js";

const router = express.Router();

// tasks

router.post("/", createTaskController);

export default router;
