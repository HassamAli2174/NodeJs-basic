import express from 'express';
import bodyParser from 'body-parser';
import adminRoutes from './routes/admin.js';
import userRoutes from './routes/shop.js';
import path from 'path';
import rootDir from 'path';
import { fileURLToPath } from 'url';

// Create __dirname manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes);
app.use(userRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(rootDir.join(__dirname, 'views', '404.html'));
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
