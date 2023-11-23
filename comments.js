// create web server
// listen to port 3000
// create a route for GET /comments
// send back some comments
// create a route for POST /comments
// get the data from the body
// push the data into the comments array
// send back the comments array
// create a route for DELETE /comments/:id
// get the id from the params
// remove the comment from the array
// send back the comments array

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const comments = [
    { id: 1, username: 'toto', comment: 'first comment' },
    { id: 2, username: 'titi', comment: 'second comment' },
    { id: 3, username: 'tata', comment: 'third comment' },
];

app.use(bodyParser.json());
app.use(cors());

app.get('/comments', (req, res) => {
    res.send(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.send(comments);
});

app.delete('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = comments.findIndex((comment) => comment.id === id);
    comments.splice(index, 1);
    res.send(comments);
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});