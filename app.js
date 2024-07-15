import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
import path from "path";
import {
  taskRoutes,
  familyRoutes,
  authRoutes,
  usersRoutes,
  annotationRoutes,
  completedTasksRoutes,
} from "./src/routes/index.js";
import parseToken from "./src/validations/parseToken.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC_FOLDER = path.join(process.cwd(), "public");
app.use(cors());
// middleware parseo del body
app.use(express.json());

// Middleware definición directorio recursos estáticos (imágenes)
app.use(express.static(PUBLIC_FOLDER));

// Middleware upload de files
app.use(fileUpload());

/* middleware que analiza el token y agrega al request los datos del usuario */
app.use(parseToken);
// enrutadores
app.use("/tasks", taskRoutes);
app.use("/family", familyRoutes);
app.use("/auth", authRoutes);
app.use("/users", usersRoutes);
app.use("/annotations", annotationRoutes);
app.use("/completed-tasks", completedTasksRoutes);

// middleware 404 not founded
app.use((req, res) => {
  return res.status(404).json({
    ok: false,
    error: "Endpoint no encontrado.",
  });
});

// middleware de error
app.use((error, req, res, next) => {
  return res.status(error.status || 500).json({
    ok: false,
    error: error.message,
  });
});
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
