import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const characters = [
    {
      name: "Detective Goose",
      description: "A noir goose detective who honks clues.",
      image: "https://i.imgur.com/your-goose-image.png"
    },
    {
      name: "Grandma Lazereyes",
      description: "A sweet old lady who shoots lasers when angry.",
      image: "https://i.imgur.com/your-grandma-image.png"
    },
    {
      name: "Laser Granny Supreme",
      description: "The multiverse’s most powerful grandmother.",
      image: "https://i.imgur.com/your-laser-granny.png"
    }
  ];

  res.json(characters);
});

export default router;

