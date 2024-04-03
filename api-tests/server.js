const express = require( 'express');
const app = express();//app
app.get("/", (req, res) =>{
    res.send("Welcome to my mosiah's backend application");
});

app.get("/mosiah", (req, res) =>{
    res.send("Hello mosiah!");
});

app.listen(3000,()=>{
    console.log("Listening");
});
