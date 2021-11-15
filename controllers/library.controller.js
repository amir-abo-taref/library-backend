const libraryModel = require('../models/library.model');


const getAllBooks = async (req, res) => {

    const data = await libraryModel.book.find({});
    return res.status(200).send(data)
}

const addNewbook = (req, res) => {
    const {bookName, nameOfWriter, yearOfPublication, language,rating} = req.body;

    const book = new libraryModel.book({
        bookName: bookName,
        nameOfWriter: nameOfWriter,
        yearOfPublication: yearOfPublication,
        language: language,
        rating:Math.floor(Math.random() * 5)
    })


    book.save((err, data) => {
        if (err) return res.status(404).send(err);
        return res.status(200).send(data);
    });


}

const deletebook = (req,res)=>{
    const {id} = req.params;
    libraryModel.book.findByIdAndDelete(id,(err, data) => {
        if (err) return res.status(404).send(err);
        return res.status(200).send(data);
    });
}

const updatebook = (req,res)=>{
    const {id} = req.params;
    const {bookName, nameOfWriter, yearOfPublication, language,rating} = req.body;
    libraryModel.book.findByIdAndUpdate(id,
        {bookName:bookName,
        nameOfWriter:nameOfWriter,
        yearOfPublication:yearOfPublication,
        language:language,
        rating:Math.floor(Math.random() * 5)
        },{new:true},
        (err, data) => {
        if (err) return res.status(404).send(err);
        return res.status(200).send(data);
    });
}

const getbooksbyyear = async(req,res)=>{
 const data = await libraryModel.book.find({yearOfPublication:req.params.year});
res.send(data);
}




module.exports = {
    getAllBooks,
    addNewbook,
    deletebook,
    updatebook,
    getbooksbyyear
}