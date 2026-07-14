import { Router } from "express";

import {
    handleInsertActorRequest,
    handleGetActoresRequest,
    handleGetActorByIdRequest,
    handleGetActoresByPeliculaIdRequest,
    handleUpdateActorByIdRequest,
    handleDeleteActorByIdRequest
} from "../controllers/actor.controller.js";

const actorRoutes = Router();

actorRoutes.post("/actor", handleInsertActorRequest);

actorRoutes.get("/actores", handleGetActoresRequest);

actorRoutes.get("/actor/:id", handleGetActorByIdRequest);

actorRoutes.get("/actor/pelicula/:peliculaId", handleGetActoresByPeliculaIdRequest);

actorRoutes.put("/actor/:id", handleUpdateActorByIdRequest);

actorRoutes.delete("/actor/:id", handleDeleteActorByIdRequest);

export default actorRoutes;