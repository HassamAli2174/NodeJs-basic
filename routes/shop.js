import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';

// Manually define __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
});

export default router;
