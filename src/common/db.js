import { MongoClient } from "mongodb";

const uri = "mongodb+srv://jessicacruzat_db_user:Q2m4Y7BdZOML9HCE@eva-u3-express.qvkjdf9.mongodb.net/?appName=eva-u3-express";
const client = new MongoClient(uri);
const db = client.db("cine-db");

export { db };
export default client;