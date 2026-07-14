import dns from "node:dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

import express from "express";
import cors from "cors";

import client from "./src/common/db.js";

import peliculaRoutes from "./src/routes/peliculaRoutes.js";
import actorRoutes from "./src/routes/actorRoutes.js";

const PORT = 3000 || 4000;

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Rutas personalizadas
app.use("/api", peliculaRoutes);
app.use("/api", actorRoutes);

// Ruta por defecto
app.get("/", (req, res) => {
    res.status(200).send("Bienvenido al cine Iplacex");
});

// Conectar a MongoDB Atlas y levantar el servidor
try {

    await client.connect();

    console.log("Conectado a MongoDB Atlas");

    app.listen(PORT, () => {
        console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
    });

} catch (error) {

    console.error("Error al conectar con MongoDB Atlas");
    console.error(error);

}