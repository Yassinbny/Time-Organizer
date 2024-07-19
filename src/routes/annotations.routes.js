import express from "express";

import {
  createAnnotationController,
  updateAnnotationController,
  deleteAnnotationController,
} from "../controllers/annotations/index.js";
import authenticateToken from "../validations/authenticateToken.js";

const router = express.Router();

// annotations

router
  .post("/", authenticateToken, createAnnotationController)
  .patch("/:idAnnotation", updateAnnotationController)
  .delete("/:idAnnotation", deleteAnnotationController);

export default router;
