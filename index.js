const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Serve index.html from the root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve static files from /public
app.use(express.static('public'));

// Serve images from /public/images
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// API routes
const characterRoutes = require('./routes/characters');
app.use('/api/characters', characterRoutes);

const sceneRoutes = require('./routes/scene');
app.use('/api/scene', sceneRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
