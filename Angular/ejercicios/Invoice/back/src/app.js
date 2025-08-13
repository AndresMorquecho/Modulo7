import express from "express";
import cors from "cors";
import { Data } from "./invoiceData.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/api/invoice", (req, res) => {
  console.log("Petición recibida: Obtener Factura");
  res.json(Data);
});

app.get("/api/health", (req, res) => {
  console.log("Petición recibida: Verificar salud del servidor");
  res.json({
    status: "ok",
    message: "Backend funcionando correctamente",
    timestamps: new Date().toString(),
    endpoint: [
      "GET /api/invoice - Obtener datos de factura",
      "GET /api/health - Verificar estado del servidor",
    ],
  });
});

app.use((req, res) => {
  console.log("Ruta no encontrada:", req.url);
  res.status(404).json({
    message: "API de facturación",
    description: "Backend para servir datos de factura al frontend Angular",
    availableEndpoints: ["/api/invoice", "/api/health"],
  });
});

app.listen(PORT, () => {
  console.log("Servidor arriba en el puerto " + PORT);
  console.log(`URL local: http://localhost:${PORT}`);
});
