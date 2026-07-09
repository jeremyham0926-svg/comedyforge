import express from 'express';
import OpenAI from 'openai';

const router = express.Router();
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Random helpers
function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

router.post('/', async (req, res) => {
    try {
        const characters = [
            "Detective Goose",
            "Goose Noir",
            "Grandma Lazereyes",
            "Laser Granny Supreme"
        ];

        const tones = [
            "chaotic absurdism",
            "noir surrealism",
            "hyper‑laser melodrama",
            "goose‑powered slapstick",
            "multiverse entropy"
        ];

        const twists = [
            "a goose portal opens unexpectedly",
            "Grandma Lazereyes vaporizes the plot",
            "Detective Goose honks a prophecy",
            "Laser Granny Supreme overloads reality",
            "the multiverse collapses into a sitcom"
        ];

        const selected = [
            pick(characters),
            pick(characters),
            pick(characters)
        ];

        const tone = pick(tones);
        const twist = pick(twists);

        const prompt = `
Create a chaotic comedy scene featuring:
Characters: ${selected.join(", ")}
Tone: ${tone}
Twist: ${twist}

Return JSON with:
title
description
beats
dialogue
camera
        `;

        const completion = await client.responses.create({
            model: "gpt-4.1-mini",
            input: prompt,
            response_format: { type: "json_object" }
        });

        res.json(completion.output[0].content[0].json);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Chaos Mode failed" });
    }
});

export default router;
