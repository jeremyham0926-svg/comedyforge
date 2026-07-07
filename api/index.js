const path = require('path');

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
  app.use(express.static(__dirname));
 
// ROUTES
const characterRoutes = require('./routes/characters');
app.use('/api/characters', characterRoutes);

// Test route


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
