import { MongoClient, ObjectId } from "mongodb";
import type { AutorModel } from "./types.ts";
import type { BookModel } from "./types.ts";
import { fromModelToAutor, fromModelToBook } from "./utils.ts";

const MONGO_URL = Deno.env.get("MONGO_URL");
if (!MONGO_URL) {
  console.error("MONGO_URL is not set");
  Deno.exit(1);
}

const client = new MongoClient(MONGO_URL);
await client.connect();
console.info("Connected to MongoDB");

const db = client.db("Examen_Parcial2");

const AutorsCollection = db.collection<AutorModel>("autor");
const BooksCollection = db.collection<BookModel>("libro");

const handler = async (req: Request): Promise<Response> => {
  const method = req.method;
  const url = new URL(req.url);
  const path = url.pathname;

  if (method === "GET") {
    if (path === "/libros") {
      const book = url.searchParams.get("books");
      if (book) {
        return new Response(JSON.stringify(book));
      }
    } else if (path === "/libro") {
      return new Response(JSON.stringify(0));
    }
  } else if (method === "PUT") {
    if (path === "/libro") {
      return new Response(JSON.stringify(0));
    }
  } else if (method === "DELETE") {
    if (path === "/libro") {
      return new Response(JSON.stringify(0));
    }
  } else if (method === "POST") {
    if (path === "/libro") {
      const book = url.searchParams.get("books");
    } else if (path === "/autor") {
      return new Response(JSON.stringify(0));
    }
  }

  return new Response("endpoint not found", { status: 404 });
};

Deno.serve({ port: 3000 }, handler);

/*
{
  "titulo": "1984",
  "autores": ["5fca76d4f4c2b5fbb788d121", "5fca76d4f4c2b5fbb788d122"],
  "copiasDisponibles": 5
}
    */
