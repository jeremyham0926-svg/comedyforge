import express from 'express';
import charactersRoute from './routes/characters.js';
import sceneRoute from './routes/scene.js';
import chaosRoute from './routes/chaos.js';

const app = express();

// Middleware
app.use(express.json());

// API Routes ONLY
app.use('/api/characters', charactersRoute);
app.use('/api/scene', sceneRoute);
app.use('/api/chaos', chaosRoute);

// Fallback 404 for unknown routes
app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Comedy Multiverse Co. backend running on port ${PORT}`);
});
