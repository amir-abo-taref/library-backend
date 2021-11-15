const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());

app.use('/api/books', require('./routes/books.route'));
app.use('/api/admin',require('./routes/admin.route'));


mongoose.connect(`mongodb+srv://admin:am1597@cluster0.y3ixr.mongodb.net/library?retryWrites=true&w=majority`,{ useNewUrlParser: true });

app.listen(process.env.PORT||5001, () => {
    console.log('Server started on port 5001');
});
