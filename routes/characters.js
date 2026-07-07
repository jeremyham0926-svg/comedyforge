const express = require('express');
const router = express.Router();

let characters = [
  { 
    id: 1, 
    name: "Detective Goose", 
    description: "A goose who solves crimes but honks at clues.",
    image: "detective-goose.png",
    role: "Chaos Detective",
    background: "#cfd8dc",
    borderColor: "#455a64",   // noir steel blue
    stats: {
      power: 6,
      chaos: 8,
      wisdom: 4
    }
  },
  { 
    id: 2, 
    name: "Grandma LaserEyes", 
    description: "Sweet old lady with laser vision when annoyed.",
    image: "grandma-lasereyes.png",
    role: "Laser Elder",
    background: "#f8bbd0",
    borderColor: "#ec407a",   // neon laser pink
    stats: {
      power: 9,
      chaos: 10,
      wisdom: 7
    }
  }
];





router.get('/', (req, res) => {
  res.json(characters);
});

router.post('/', (req, res) => {
  const newCharacter = {
    id: characters.length + 1,
    name: req.body.name,
    description: req.body.description
  };

  characters.push(newCharacter);
  res.json(newCharacter);
});

module.exports = router;

