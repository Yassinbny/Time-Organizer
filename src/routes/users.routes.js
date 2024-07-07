import express from "express";
import {
  confirmUserController,
  recoverPassController,
  resetPassController,
} from "../controllers/users/index.js";

const router = express.Router();

router.get("/confirm", confirmUserController);

//Recuperar contraseña
router.post("/password/recover", recoverPassController);

//Resetear o cambiar la contraseña
router.put("/password/reset", resetPassController);

export default router;
