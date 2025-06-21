import express from 'express';
import path from 'path';
import rootDir from '../utils/path.js';

const router = express.Router();

// Serve form on GET request /admin/add-product
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// Handle form submission /admin/product
router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

export default router;
