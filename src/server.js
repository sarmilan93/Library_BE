import express from "express";
import { MongoClient } from "mongodb";
import router from "./routes.js";

const app = express();
app.use(express.json());

app.use('/api', router)

const client = new MongoClient('mongodb://localhost:27017/');
await client.connect();
const db = client.db('library');

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})