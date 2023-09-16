import Author from "../models/author_model.js";

//Get Authors
export function getAuthors(req, res) {
    Author.find()
        .then((authors) => {
            res.json({
                status: "success",
                message: "Got Authors Successfully!",
                data: authors
            });
        })
        .catch((error) => {
            res.json({
                status: "error",
                message: error
            });
        });
};

//Get author by id
export function getAuthotById(req, res){
    const id = req.params.id;
    Author.findById(id)
        .then((author) => {
            res.json({
                status: "success",
                message: "Author Details",
                data: author
            });
        })
        .catch((error) => {
            res.json({
                status: "error",
                message: error
            });
        });
}

//Add new author
export function addNewAuthor(req, res) {
    const author = new Author({
        first_name: req.body.first_name,
        last_name: req.body.last_name
    });

    author.save()
        .then((response) => {
            res.json({
                status: "success",
                message: "New Author Added!",
                data: response
            });
        })
        .catch((error) => {
            res.json({
                status: "error",
                message: error
            });
        });
}

//Update existing author details
export function updateAuthor(req, res) {
    const id = req.params.id;
    
    Author.findById(id)
        .then((author)=> {
            author.first_name = req.body.first_name;
            author.last_name = req.body.last_name;

            author.save()
                .then((response) => {
                    res.json({
                        status: "success",
                        message: "Author Updated!",
                        data: response
                    });
                })
                .catch((error) => {
                    res.json({
                        status: "error",
                        message: error
                    });
                });
        })
        .catch((error) => {
            res.json({
                status: "error",
                message: error
            });
        });
}