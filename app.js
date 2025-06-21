import express from 'express';
const app = express();

app.use((req,res,next)=>{
    console.log('This Always Runs');
    next(); //allows the request to continue to the next middleware in line 
})

app.use('/add-product',(req,res,next)=>{
    console.log('The middleware');
    res.send('<h1>The "Add Product" Page</h1>');
})

app.use('/',(req,res,next)=>{
    console.log('In the next middleware');
    res.send('<h1>Hello from express</h1>');
})

app.listen(3000);