const express = require('express');
const router = express.Router();

let characters = [
  { id: 1, name: "Detective Goose", description: "A goose who solves crimes but honks at clues." },
  { id: 2, name: "Grandma LaserEyes", description: "Sweet old lady with laser vision when annoyed." }
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
