import { createServer } from 'http';
// import { handler, someText } from './routes.js';
import express from 'express';
// const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log('In the middleware');
    next(); //allows the request to continue to the next middleware in line 
})
app.use((req,res,next)=>{
    console.log('In the next middleware');
    res.send('<h1>Hello from express</h1>');
    next();
})

const server = createServer(app);

server.listen(3000)