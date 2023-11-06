const express= require("express");
const router =express.Router();

const books = [
    {
        isbn:1,
        author:"Nasim Taleb",
        title:"Black Swan",
        reviewment:{}
    },
    {
        isbn:2,
        author:"Harper Lee",
        title:"To Kill a Mockingbird",
        reviewment:{}
    },
    {
        isbn:3,
        author:"George Orwell",
        title:"1984",
        reviewment:{}
    },
    {
        isbn:4,
        author:"Jane Austen",
        title:"Pride and Prejudice",
        reviewment:{}
    },
    {
        isbn:5,
        author:"The Great Gatsby",
        title:"F. Scott Fitzgerald",
        reviewment:{}
    }
]

router.get("/" , (req,res) => {
    res.json(books);
});
router.get("/isbn/:isbn" , (req,res) => {
    const book = books.find(b => b.isbn === parseInt(req.params.isbn));
    if(book){
        res.status(200).json(book);
    }else {
        res.status(404).json({message:"book not found"})
    }
});
router.get("/title/:title", (req,res) => {
    const book = books.find(b => b.title === req.params.title);
    if(book){
        res.status(200).json({message:"by title",book})
    }else {
        res.status(404).json({message:"book not found"})
    }
});
router.get("/author/:author", (req,res) => {
    const book = books.find(b => b.author === req.params.author);
    if(book){
        res.status(200).json({message:"by author",book})
    }else {
        res.status(404).json({message:"book not found"})
    }
});
router.get("/reviewment/1", (req,res) => {
   res.status(200).json({});
});
router.post("/", (req,res)=> {
    const book = {
        isbn: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        reviewment: req.body.reviewment,
         
    }
    books.push(book);
    res.status(201).json("book has been added successfully"); // 201 => created successfully
})
router.put("/:isbn",(req,res) => {
   const book = books .find(b => b.isbn === parseInt(req.params.isbn));
   if(book){
    res.status(200).json({message:"the book with isbn 1 has been updated/added"});
   }else {
    res.status(404).json({message: "book not found"})
   }
});
router.delete("/:isbn",(req,res) => {
    const book = books.find(b => b.isbn === parseInt(req.params.isbn));
    if(book){
     res.status(200).json({message:"review for isbn 1 has been deleted"});
    }else {
     res.status(404).json({message: "book not found"})
    }
 });
 

module.exports= router;