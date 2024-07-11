import express from "express";
import listCompletedTasksController from "../controllers/listCompletedTasks.controller.js";
import checkUser from "../validations/checkUser.js";

const router = express.Router();

router.get("/", checkUser, listCompletedTasksController);

export default router;