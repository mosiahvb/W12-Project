const express = require('express');
const app = express();

app.get("/", (req,res)=>{
    res.send("Welcome to Scrum Team5's backend application");

});

app.get("/scrum team", (req,res)=>{
    res.send("Hello Scrum Team!");
});

app.listen(3000,()=>{
    console.log("Listening");
});