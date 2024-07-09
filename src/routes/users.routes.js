import express from "express";
import {
  confirmUserController,
  recoverPassController,
  resetPassController,
  deleteUserController,
  toggleUserStatusController,
  listUsersController
} from "../controllers/users/index.js";
import { authenticateToken, checkUser, isAdmin } from "../validations/index.js";

const router = express.Router();

router.get("/confirm", confirmUserController);

// Ruta para listar usuarios
router.get('/', authenticateToken, checkUser, isAdmin, listUsersController);

// Eliminar usuario (solo administradores)
router.delete("/:username", authenticateToken, checkUser, isAdmin, deleteUserController);

// Habilitar/Deshabilitar usuario (solo administradores)
router.put("/:username/status", authenticateToken, checkUser, isAdmin, toggleUserStatusController);

// Recuperar contraseña
router.post("/password/recover", recoverPassController);

// Resetear o cambiar la contraseña
router.put("/password/reset", resetPassController);

export default router;
