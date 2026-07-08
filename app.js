// Fetch characters
fetch('/api/characters')
  .then(res => res.json())
  .then(characters => {
    const container = document.getElementById('characters');

    characters.forEach(char => {
      const div = document.createElement('div');
      div.className = 'character-card';
      div.style.background = char.background;
      div.style.borderColor = char.borderColor;

      div.innerHTML = `
        <img class="character-image" src="images/${char.image}" alt="${char.name}">
        <div class="character-name">${char.name}</div>
        <div class="character-role">${char.role}</div>
        <div class="character-description">${char.description}</div>

        <div class="character-stats">
          <div>Power: ${char.stats.power}</div>
          <div>Chaos: ${char.stats.chaos}</div>
          <div>Wisdom: ${char.stats.wisdom}</div>
        </div>

        <button class="scene-button" onclick="generateScene('${char.name}')">Generate Scene</button>
        <button class="voice-button" onclick="playVoice('${char.name}')">Play Voice Line</button>

        <div class="character-footer">Multiverse ID: ${char.id}</div>
      `;

      container.appendChild(div);
    });
  });

// Scene templates
const sceneTemplates = [
  name => `${name} enters the multiverse café and immediately causes chaos by ordering a drink that doesn’t exist.`,
  name => `${name} discovers a glowing portal behind a vending machine and decides to investigate without thinking.`,
  name => `${name} tries to solve a mystery but gets distracted by a dramatic monologue from a talking sandwich.`,
  name => `${name} accidentally activates a cosmic button labeled “DO NOT PRESS” and the universe sneezes.`,
  name => `${name} challenges a robot to a dance battle and somehow wins by honking, blinking, or yelling.`,
];

// Chaos templates
const chaosTemplates = [
  name => `${name} is duplicated into 14 versions, each arguing about who honked first.`,
  name => `${name} accidentally merges with a toaster and becomes a breakfast-themed superhero.`,
  name => `${name} opens a wormhole by sneezing too hard, pulling in three confused raccoons.`,
  name => `${name} becomes temporarily omniscient but only uses the power to judge people’s shoes.`,
  name => `${name} triggers a cosmic glitch that makes everyone speak in dramatic slow motion.`,
];

// Normal scene generator
function generateScene(characterName) {
  const output = document.getElementById("scene-output");
  const template = sceneTemplates[Math.floor(Math.random() * sceneTemplates.length)];
  const scene = template(characterName);

  output.innerHTML = `
    <div class="scene-text">
      <strong>Scene Generated:</strong><br><br>
      ${scene}
    </div>
  `;
}

// Chaos scene generator
function generateChaosScene(characterName) {
  const output = document.getElementById("scene-output");
  const template = chaosTemplates[Math.floor(Math.random() * chaosTemplates.length)];
  const scene = template(characterName);

  output.innerHTML = `
    <div class="scene-text">
      <strong>CHAOS MODE SCENE:</strong><br><br>
      ${scene}
    </div>
  `;
}

// Chaos Mode
function activateChaosMode() {
  const cards = document.querySelectorAll('.character-card');

  cards.forEach(card => card.classList.remove('character-highlight'));

  const randomIndex = Math.floor(Math.random() * cards.length);
  const randomCard = cards[randomIndex];

  randomCard.classList.add('character-highlight');

  const name = randomCard.querySelector('.character-name').innerText;

  generateChaosScene(name);
}

// Voice placeholder
function playVoice(characterName) {
  alert(`Voice lines coming soon for ${characterName}!`);
}
