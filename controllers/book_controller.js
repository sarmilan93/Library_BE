import Book from "../models/book_model.js";

//Get books
export function getBooks(req, res) {
    Book.find()
        .then((books) => {
            res.json({
                status: "success",
                message: "Got Books Successfully!",
                data: books
            });
        })
        .catch((error) => {
            res.json({
                status: "error",
                message: error
            });
        });
};

//Get book by id
export function getBookById(req, res){
    const id = req.params.id;
    Book.findById(id)
        .then((book) => {
            res.json({
                status: "success",
                message: "Book Details",
                data: book
            });
        })
        .catch((error) => {
            res.json({
                status: "error",
                message: error
            });
        });
}

//Add new book
export function addNewBook(req, res) {
    const book = new Book({
        name: req.body.name,
        isbn: req.body.isbn,
        author: req.body.author
    });

    book.save()
        .then((response) => {
            res.json({
                status: "success",
                message: "New Book Added!",
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

//Update existing book details
export function updateBook(req, res) {
    const id = req.params.id;
    
    Book.findById(id)
        .then((book)=> {
            book.name = req.body.name ? req.body.name : book.name;
            book.isbn = req.body.isbn ? req.body.isbn : book.isbn;
            book.author = req.body.author ? req.body.author : book.author;

            book.save()
                .then((response) => {
                    res.json({
                        status: "success",
                        message: "Book Updated!",
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