import express from "express";
import { taskRoutes, authRoutes, usersRoutes } from "./src/routes/index.js";
import cors from "cors";


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

// enrutadores
app.use("/tasks", taskRoutes);
app.use("/auth", authRoutes);
app.use("/users", usersRoutes);

// app.get("/prueba", (req, res) => {
//   res.send("esto es una prueba");
// });

// app.use((req, res) => {
//   res.send("hola mundo");
// });

app.listen(PORT, () => {
  console.log(`se esta escuchando en el puerto ${PORT}`);
});
