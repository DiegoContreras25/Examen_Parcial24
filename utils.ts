import type { Collection } from "mongodb";
import type { Autor, AutorModel, BookModel } from "./types.ts";
import type { Book } from "./types.ts";

export const fromModelToBook = (model: BookModel): Book => ({
    _id: model._id!.toString(),
    copias: model.copias,
    titulo: model.titulo,
});

export const fromModelToAutor = (model: AutorModel): Autor => ({
    nombre: model.nombre,
    biografia: model.biografia,
});
