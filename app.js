import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
import path from "path";
import { taskRoutes, familyRoutes, authRoutes, usersRoutes } from "./src/routes/index.js";

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

// enrutadores
app.use("/tasks", taskRoutes);
app.use("/family", familyRoutes);
app.use("/auth", authRoutes);
app.use("/users", usersRoutes);

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
  console.log(`Se está escuchando en el puerto ${PORT}.`);
});
