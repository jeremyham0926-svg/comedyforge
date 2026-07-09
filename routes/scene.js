import express from 'express';
import OpenAI from 'openai';

const router = express.Router();
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post('/', async (req, res) => {
  try {
    const { characters, prompt } = req.body;

    const scenePrompt = `
Create a comedy scene using the following characters:
${characters.join(", ")}

User prompt:
${prompt}

Return JSON with:
title
description
beats
dialogue
camera
    `;

    const completion = await client.responses.create({
      model: "gpt-4.1-mini",
      input: scenePrompt,
      response_format: { type: "json_object" }
    });

    res.json(completion.output[0].content[0].json);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Scene generation failed" });
  }
});

export default router;
