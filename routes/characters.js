const express = require('express');
const router = express.Router();

// Character list
const characters = [
    {
        name: "Detective Goose",
        description: "A goose who solves crimes but honks at clues.",
        image: "/images/detective-goose.png"
    },
    {
        name: "Grandma Lazereyes",
        description: "A grandma with laser vision and zero patience for nonsense.",
        image: "/images/grandma-lazereyes.png"
    },
    {
        name: "Goose Noir",
        description: "A moodier version of Detective Goose who only works in foggy alleys.",
        image: "/images/detective-goose.png"
    },
    {
        name: "Laser Granny Supreme",
        description: "Grandma Lazereyes at full power, capable of vaporizing plot holes.",
        image: "/images/grandma-lazereyes.png"
    }
];

// GET /api/characters
router.get('/', (req, res) => {
    res.json(characters);
});

module.exports = router;
