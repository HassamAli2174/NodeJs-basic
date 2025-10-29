import express from 'express';
import path from 'path';
import rootDir from '../utils/path.js';

const router = express.Router();
const products =[];
// Serve form on GET request /admin/add-product
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// Handle form submission /admin/product
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    products.push({title:req.body.title});
    res.redirect('/');
});

// export { router as routes, products };
export default {
    routes: router,
    products: products
};