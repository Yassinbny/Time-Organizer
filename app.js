import express from "express";

const app = express();
const PORT = 3000;

app.get("/prueba", (req, res) => {
  res.send("esto es una prueba");
});

app.use((req, res) => {
  res.send("hola mundo");
});

app.listen(PORT, () => {
  console.log(`se esta escuchando en el puerto ${PORT}`);
});
