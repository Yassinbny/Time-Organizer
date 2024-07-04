import express from "express";

import {
    createTaskFamilyController,
    listTaskFamilyController,
} from "../controllers/index.js";

const router = express.Router();

router
.get("/", listTaskFamilyController)
.post("/:idTask", createTaskFamilyController)

export default router;