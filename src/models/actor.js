import { ObjectId, BSONType } from "mongodb";

export const Actor = {

    _id: ObjectId,
    nombre: BSONType.string,
    apellido: BSONType.string,
    nacionalidad: BSONType.string,
    edad: BSONType.int,
    peliculaId: ObjectId

};