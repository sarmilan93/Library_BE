import { Schema, model } from "mongoose";

let authors = Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    }
});

const Author = model('Author', authors , 'Author');
export default Author;