import { ObjectId, type OptionalId } from "mongodb";

export type BookModel = OptionalId<{
    _id: ObjectId;
    titulo: string;
    autores: ObjectId[];
    copias: number;
}>;
export type AutorModel = OptionalId<{
    nombre: string;
    biografia: string;
}>;

export type Book = {
    _id: ObjectId;
    titulo: string;
    autores: ObjectId[];
    copias: number;
};

export type Autor = {
    nombre: string;
    biografia: string;
};
