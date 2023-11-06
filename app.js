const express = require("express");
const bookspath= require("./routes/books");
const app =express();
const authpath= require("./routes/auth");
const userpath= require("./routes/users");

app.use(express.json());

app.use("/api/books",bookspath);
app.use("/api/auth",authpath);
app.use("/api/users",userpath);


const PORT=5000;
app.listen(PORT, () => console.log('Sever is running on port ${PORT}'));
