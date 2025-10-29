import express from 'express';
import path from 'path';
import rootDir from '../utils/path.js'; 
import adminData from './admin.js';

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('shop.js', adminData.products);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

export default router;
