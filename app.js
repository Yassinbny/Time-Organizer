import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
import path from "path";
import { PUBLIC_FOLDER } from "./env.js";
import {
  taskRoutes,
  familyRoutes,
  authRoutes,
  usersRoutes,
  annotationRoutes,
  imagesRoutes,
  colorsRoutes,
} from "./src/routes/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const PATH_PUBLIC_FOLDER = path.join(process.cwd(), PUBLIC_FOLDER);

app.use(cors());

// middleware parseo del body
app.use(express.json());

// Middleware definición directorio recursos estáticos (imágenes)
app.use(express.static(PATH_PUBLIC_FOLDER));

// Middleware upload de files
app.use(fileUpload());

// enrutadores
app.use("/tasks", taskRoutes);
app.use("/family", familyRoutes);
app.use("/auth", authRoutes);
app.use("/users", usersRoutes);
app.use("/annotations", annotationRoutes);
app.use("/image", imagesRoutes);
app.use("/colors", colorsRoutes);

app.get("/ping", (req, res) => {
  res.send("hello world");
});
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
