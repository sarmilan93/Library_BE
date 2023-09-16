import express from "express";
import { getAuthors, getAuthotById, addNewAuthor, updateAuthor } from "../controllers/author_controller.js";

let authorRouter = express.Router();

authorRouter.get('/authorapi', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to Library API for Authors'
    });
});

// Routes for Author
authorRouter.route('/authorapi/authors')
    .get(getAuthors)

authorRouter.route('/authorapi/author/:id')
    .get(getAuthotById)
    .put(updateAuthor);

authorRouter.route('/authorapi/author')
    .post(addNewAuthor);

export default authorRouter;