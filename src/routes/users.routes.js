import express from "express";
import {
  confirmUserController,
  recoverPassController,
  resetPassController,
  adminProfileController,
  deleteUserController,
  toggleUserStatusController,
  listUsersController,
  profileController,
  editUsernameController,
  avatarController,
  changeForgotPasswordController,
} from "../controllers/users/index.js";

import {
  authenticateToken,
  isAdmin,
  userExists,
} from "../middlewares/index.js";

const router = express.Router();

router.get("/confirm/:validationCode", confirmUserController);

// Ruta para el perfil de administrador
router.get("/profile/admin", authenticateToken, isAdmin, adminProfileController)

// Ruta para listar usuarios
router.get("/", authenticateToken, isAdmin, listUsersController);

// Eliminar usuario (solo administradores)
router.delete("/:user_id", authenticateToken, isAdmin, deleteUserController);

// Habilitar/Deshabilitar usuario (solo administradores)
router.put(
  "/:username/status",
  authenticateToken,
  isAdmin,
  toggleUserStatusController
);

// Recuperar contraseña
router.post("/password/recover", recoverPassController);

// Ruta para el perfil normal
router.get("/profile", authenticateToken, profileController)

// Resetear o cambiar la contraseña
router.put("/password/reset", authenticateToken, resetPassController);

// Editar o cambiar nombre de usuario
router.put("/profile/username", authenticateToken, editUsernameController);

// Avatar
router.post("/profile/avatar", authenticateToken, userExists, avatarController);

// cambiar la contraseña de recuperación cuenta
router.post("/password/change", changeForgotPasswordController);

export default router;
