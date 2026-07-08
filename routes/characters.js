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
router.get('/:id/scene', (req, res) => {
  const id = parseInt(req.params.id);
  const character = characters.find(c => c.id === id);

  if (!character) {
    return res.status(404).json({ error: "Character not found" });
  }

  const chaosLevel = character.stats?.chaos || 5;

  const baseScenes = [
    `${character.name} steps through a glowing multiverse portal, feathers ruffled and ready.`,
    `${character.name} arrives in a neon‑lit alley where reality bends like warm taffy.`,
    `${character.name} wakes up inside a cosmic diner where the menus rewrite themselves.`,
    `${character.name} materializes in a floating library guarded by sarcastic holograms.`
  ];

  const chaosScenes = [
    `${character.name} unleashes a chaos blast that turns gravity into a polite suggestion.`,
    `${character.name} accidentally opens a wormhole that smells faintly like pickles.`,
    `${character.name} triggers a multiverse glitch — now everyone speaks in dramatic whispers.`,
    `${character.name} summons a cosmic goose stampede. No one is prepared.`
  ];

  const scene = chaosLevel > 6
    ? chaosScenes[Math.floor(Math.random() * chaosScenes.length)]
    : baseScenes[Math.floor(Math.random() * baseScenes.length)];

  res.json({ scene });
});
router.get('/multi/:count', (req, res) => {
  const count = Math.min(Math.max(parseInt(req.params.count), 1), 3);

  // Shuffle characters
  const shuffled = [...characters].sort(() => Math.random() - 0.5);

  // Pick the number requested
  const selected = shuffled.slice(0, count);

  // Build a dynamic scene
  let intro = `${selected.map(c => c.name).join(", ")} enter the multiverse together.`;

  let actions = selected.map(c => {
    const chaos = c.stats?.chaos || 5;

    if (chaos > 6) {
      return `${c.name} unleashes chaotic energy that warps reality.`;
    } else {
      return `${c.name} explores the strange environment cautiously.`;
    }
  }).join(" ");

  let twist = count === 3
    ? "A cosmic anomaly appears — the trio must act fast."
    : "A ripple in spacetime changes everything.";

  const scene = `${intro} ${actions} ${twist}`;

  res.json({ scene, characters: selected });
});

module.exports = router;

