import express from "express";
import {
  confirmUserController,
  recoverPassController,
  resetPassController,
  deleteUserController,
  toggleUserStatusController,
  listUsersController,
  editUsernameController,
  avatarController,
} from "../controllers/users/index.js";

import { authenticateToken, isAdmin, userExists } from "../middlewares/index.js";

const router = express.Router();

router.get("/confirm", confirmUserController);

// Ruta para listar usuarios
router.get("/", authenticateToken, isAdmin, listUsersController);

// Eliminar usuario (solo administradores)
router.delete("/:username", authenticateToken, isAdmin, deleteUserController);

// Habilitar/Deshabilitar usuario (solo administradores)
router.put(
  "/:username/status",
  authenticateToken,
  isAdmin,
  toggleUserStatusController
);

// Recuperar contraseña
router.post("/password/recover", recoverPassController);

// Resetear o cambiar la contraseña
router.put("/password/reset", resetPassController);

// Editar o cambiar nombre de usuario
router.put("/username", authenticateToken, editUsernameController);

// Avatar
router.put("/avatar", authenticateToken, userExists, avatarController);

export default router;
