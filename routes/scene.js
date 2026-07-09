const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { characters = [], prompt = '' } = req.body;

    const safeChars = characters.length ? characters : ['Unknown Character'];

    const title = `Scene: ${safeChars.join(', ')}`;
    const description = `A comedic scene based on your prompt: "${prompt}".`;

    const beats = `
1. Establishing shot: ${safeChars[0]} enters the scene.
2. Setup: The situation gets weird fast.
3. Escalation: Jokes stack, tension rises, logic breaks.
4. Punchline: Reality collapses in a funny way.
5. Button: One last tiny joke before we cut.
`.trim();

    const dialogue = `
${safeChars[0]}: "Okay, this is already weirder than it should be."
${safeChars[1] || 'Narrator'}: "You say that like this is your first multiverse."

${safeChars[0]}: "Remind me again why we're doing this in front of a fog machine?"
${safeChars[1] || 'Narrator'}: "Because drama, ${safeChars[0]}. Always because drama."

${safeChars[0]}: "Fine. If the universe wants chaos, I'll give it chaos."
${safeChars[1] || 'Narrator'}: "And I'll be over here pretending this is normal."
`.trim();

    const camera = `
- Start: Wide shot to show environment and both characters.
- Mid: Slow push-in on ${safeChars[0]} during the setup line.
- Cut: Reaction shot on ${safeChars[1] || 'Narrator'} for the punchline.
- End: Slight zoom-out with ambient motion (fog, lights) as the last joke lands.
`.trim();

    res.json({ title, description, beats, dialogue, camera });
});

module.exports = router;

