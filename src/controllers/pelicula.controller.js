import { db } from "../common/db.js";
import { ObjectId } from "mongodb";
import { Pelicula } from "../models/pelicula.js";

const peliculaCollection = db.collection("pelicula");

// Agregar película
export const handleInsertPeliculaRequest = async (req, res) => {

    try {

        const pelicula = {
            nombre: req.body.nombre,
            generos: req.body.generos,
            anioEstreno: req.body.anioEstreno
        };

        await peliculaCollection.insertOne(pelicula);

        return res.status(201).json(pelicula);

    } catch (error) {

        return res.status(500).json(error);

    }

};

// Obtener todas
export const handleGetPeliculasRequest = async (req, res) => {

    try {

        const peliculas = await peliculaCollection.find().toArray();

        return res.status(200).json(peliculas);

    } catch (error) {

        return res.status(500).json(error);

    }

};

// Obtener por id
export const handleGetPeliculaByIdRequest = async (req, res) => {

    try {

        const pelicula = await peliculaCollection.findOne({
            _id: new ObjectId(req.params.id)
        });

        return res.status(200).json(pelicula);

    } catch (error) {

        return res.status(400).json({
            mensaje: "Id mal formado"
        });

    }

};

// Actualizar
export const handleUpdatePeliculaByIdRequest = async (req, res) => {

    try {

        await peliculaCollection.updateOne(

            { _id: new ObjectId(req.params.id) },

            {
                $set: req.body
            }

        );

        return res.status(200).json({
            mensaje: "Película actualizada"
        });

    } catch (error) {

        return res.status(400).json({
            mensaje: "Id mal formado"
        });

    }

};

// Eliminar
export const handleDeletePeliculaByIdRequest = async (req, res) => {

    try {

        await peliculaCollection.deleteOne({
            _id: new ObjectId(req.params.id)
        });

        return res.status(200).json({
            mensaje: "Película eliminada"
        });

    } catch (error) {

        return res.status(400).json({
            mensaje: "Id mal formado"
        });

    }

};