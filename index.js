import dotenv from "dotenv";
import express from "express";
import { selectUsuarios } from "./bd.js";

dotenv.config();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("Rota GET / solicitada");
  // Cria a rota da raiz do projeto
  res.json({
    nome: "Antônio Marcos",
  });
});

app.get("/usuarios", async (req, res) => {
  try {
    const usuarios = await selectUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }

  console.log("Rota GET/usuarios solicitada");
});

app.listen(port, () => {
  // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});