import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import charactersRoute from './routes/characters.js';
import sceneRoute from './routes/scene.js';
import chaosRoute from './routes/chaos.js';

const app = express();

// Resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/characters', charactersRoute);
app.use('/api/scene', sceneRoute);
app.use('/api/chaos', chaosRoute);

// Serve main HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Fallback 404
app.use((req, res) => {
    res.status(404).send('Not Found');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Comedy Multiverse Co. running on port ${PORT}`);
});
