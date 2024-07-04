import express from "express";
import { confirmUserController } from "../controllers/users/index.js";

const router = express.Router();

router.post("/confirm", confirmUserController);

export default router;
