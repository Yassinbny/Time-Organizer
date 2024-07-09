import express from "express";

import {
    createAnnotationController,
} from "../controllers/index.js";
import checkUser from "../validations/checkUser.js";

const router = express.Router();

// annotations

router
    .post("/",checkUser, createAnnotationController);

export default router;