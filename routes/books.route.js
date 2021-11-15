const express = require('express');
const bookController = require('../controllers/library.controller')
const router = express.Router();


router.get('/', (req, res) => {
    bookController.getAllBooks(req, res);
}).post('/', (req, res) => {
    bookController.addNewbook(req, res);
    }).put('/:id', (req, res) => {
    bookController.updatebook(req, res);
}).delete('/:id', (req, res) => {
    bookController.deletebook(req, res);

}).get('/:year',(req, res) => {
     bookController.getbooksbyyear(req, res);
});





module.exports = router;