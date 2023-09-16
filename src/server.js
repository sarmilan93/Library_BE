import express from "express";
import { connect } from "mongoose";
import authorRouter from "../routes/author_routes.js";
import bookRouter from "../routes/book_routes.js";

const app = express();
app.use(express.json()); //request body will accept json format

//Routes for Author & Book
app.use('/library', authorRouter)
app.use('/library', bookRouter)

//Database Connection
const dbPath = 'mongodb://localhost:27017/library';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = connect(dbPath, options);

mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
})

//Specify port for node server
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})