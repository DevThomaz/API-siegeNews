import express from "express";
import cors from "cors"; // Adicione esta importação
import connectDatabase from "./database/db.js";
import dotenv from "dotenv";

import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import newsRoute from "./routes/news.route.js";
import swaggerRoute from "./routes/swagger.route.cjs"

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

// Adicione esta configuração de CORS antes das rotas
app.use(cors({
  origin: 'http://localhost:5173', // URL do seu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] // Cabeçalhos permitidos
}));

connectDatabase()
app.use(express.json());
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/news", newsRoute);
app.use("/doc", swaggerRoute);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));