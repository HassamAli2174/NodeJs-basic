import express from 'express';
import bodyParser from 'body-parser';
import adminRoutes from './routes/admin.js'
import userRoutes from './routes/shop.js'


const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(userRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>');
})



app.listen(3000, () => {
    console.log('Server running on port 3000');
});
