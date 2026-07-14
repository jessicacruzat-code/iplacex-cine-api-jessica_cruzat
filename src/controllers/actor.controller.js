import { db } from "../common/db.js";
import { ObjectId } from "mongodb";
import { Actor } from "../models/actor.js";

const actorCollection = db.collection("actor");
const peliculaCollection = db.collection("pelicula");

// Agregar actor
export const handleInsertActorRequest = async (req, res) => {

    try {

        const pelicula = await peliculaCollection.findOne({

            _id: new ObjectId(req.body.peliculaId)

        });

        if (!pelicula) {

            return res.status(404).json({

                mensaje: "La película no existe"

            });

        }

        const actor = {

            nombre: req.body.nombre,
            apellido: req.body.apellido,
            nacionalidad: req.body.nacionalidad,
            edad: req.body.edad,
            peliculaId: req.body.peliculaId

        };

        await actorCollection.insertOne(actor);

        return res.status(201).json(actor);

    } catch (error) {

        return res.status(500).json(error);

    }

};

// Obtener todos
export const handleGetActoresRequest = async (req, res) => {

    try {

        const actores = await actorCollection.find().toArray();

        return res.status(200).json(actores);

    } catch (error) {

        return res.status(500).json(error);

    }

};

// Obtener por id
export const handleGetActorByIdRequest = async (req, res) => {

    try {

        const actor = await actorCollection.findOne({

            _id: new ObjectId(req.params.id)

        });

        return res.status(200).json(actor);

    } catch (error) {

        return res.status(400).json({

            mensaje: "Id mal formado"

        });

    }

};

// Obtener actores por película
export const handleGetActoresByPeliculaIdRequest = async (req, res) => {

    try {

        const actores = await actorCollection.find({

            peliculaId: req.params.peliculaId

        }).toArray();

        return res.status(200).json(actores);

    } catch (error) {

        return res.status(500).json(error);

    }

};

// Actualizar actor
export const handleUpdateActorByIdRequest = async (req, res) => {

    try {

        await actorCollection.updateOne(

            { _id: new ObjectId(req.params.id) },

            {

                $set: req.body

            }

        );

        return res.status(200).json({

            mensaje: "Actor actualizado"

        });

    } catch (error) {

        return res.status(400).json({

            mensaje: "Id mal formado"

        });

    }

};

// Eliminar actor
export const handleDeleteActorByIdRequest = async (req, res) => {

    try {

        await actorCollection.deleteOne({

            _id: new ObjectId(req.params.id)

        });

        return res.status(200).json({

            mensaje: "Actor eliminado"

        });

    } catch (error) {

        return res.status(400).json({

            mensaje: "Id mal formado"

        });

    }

};