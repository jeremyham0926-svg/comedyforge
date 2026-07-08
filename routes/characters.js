const express = require('express');
const router = express.Router();

const characters = [
  {
    id: 1,
    name: "Detective Goose",
    description: "A goose who solves crimes but honks at clues.",
    image: "detective-goose.png",
    role: "Chaos Detective",
    background: "#cfd8dc",
    borderColor: "#455a64",
    stats: { power: 6, chaos: 8, wisdom: 4 }
  },
  {
    id: 2,
    name: "Grandma LaserEyes",
    description: "Sweet old lady with laser vision when annoyed.",
    image: "grandma-lasereyes.png",
    role: "Laser Elder",
    background: "#f8bbd0",
    borderColor: "#ec407a",
    stats: { power: 9, chaos: 10, wisdom: 7 }
  }
];

router.get('/', (req, res) => {
  res.json(characters);
});

module.exports = router;



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
router.get('/:id/voice', (req, res) => {
  const id = parseInt(req.params.id);
  const character = characters.find(c => c.id === id);

  if (!character) {
    return res.status(404).json({ error: "Character not found" });
  }

  const lines = [
    `${character.name} enters the multiverse with chaotic energy.`,
    `${character.name} says: "I smell trouble... and snacks."`,
    `${character.name} whispers: "Reality is optional."`,
    `${character.name} shouts: "Chaos mode activated!"`
  ];

  const randomLine = lines[Math.floor(Math.random() * lines.length)];

  res.json({ line: randomLine });
});

module.exports = router;

