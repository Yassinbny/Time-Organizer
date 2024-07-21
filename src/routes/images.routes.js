import express from "express";

import { uploadImageController } from "../controllers/images/index.js";
import { authenticateToken } from "../middlewares/index.js";

const router = express.Router();

router.put("/", authenticateToken, uploadImageController);

export default router;
