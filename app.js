require('dotenv').config();
const express = require('express');
const morgan = require('morgan')

const app=express();

app.listen(process.env.PORT,()=>{
    console.log(`listen on http://localhost:${process.env.PORT}`)
})
