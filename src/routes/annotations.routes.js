import express from "express";

import {
  createAnnotationController,
  updateAnnotationController,
  deleteAnnotationController,
} from "../controllers/annotations/index.js";
import checkUser from "../validations/checkUser.js";

const router = express.Router();

// annotations

router
  .post("/", checkUser, createAnnotationController)
  .patch("/:idAnnotation", updateAnnotationController)
  .delete("/:idAnnotation", deleteAnnotationController);

export default router;
