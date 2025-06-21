import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';

const router = express.Router(); 

// Manually define __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve form on GET request /admin/add-product ==> GET
router.get('/add-product', (req, res, next) => {
    // res.send(`
    //     <form action="/admin/product" method="POST">
    //         <input type="text" name="title">
    //         <button type="submit">Add Product</button>
    //     </form>
    // `);
    res.sendFile(path.join(__dirname, '../' , 'views' , 'add-product.html'))
});

// Handle form submission /admin/add-product ==> POST
router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

// module.exports = router;
export default router; 
