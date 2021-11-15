const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());

app.use('/api/books', require('./routes/books.route'));
app.use('/api/admin',require('./routes/admin.route'));


mongoose.connect('mongodb://localhost:27017/book',{ useNewUrlParser: true });

app.listen(5001, () => {
    console.log('Server started on port 5001');
});