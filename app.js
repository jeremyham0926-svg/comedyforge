// Fetch characters from the backend
fetch('https://comedyforge.onrender.com/api/characters')
  .then(response => response.json())
  .then(characters => {
    const container = document.getElementById('characters');
function generateScene(characterName) {
  const output = document.getElementById("scene-output");
  output.innerHTML = `
    <div class="scene-text">
      Generating a scene for <strong>${characterName}</strong>...
      <br><br>
      <em>(Scene generation coming soon!)</em>
    </div>
  `;
}

function playVoice(characterName) {
  console.log(`Playing voice line for ${characterName}...`);
  alert(`Voice lines coming soon for ${characterName}!`);
}
function activateChaosMode() {
  console.log("CHAOS MODE ACTIVATED!");
  alert("Chaos Mode coming soon! Characters will go wild!");
}

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
`;



  container.appendChild(div);
});

  })
  .catch(err => console.error('Error fetching characters:', err));
const sceneTemplates = [
  (name) => `${name} enters the multiverse café and immediately causes chaos by ordering a drink that doesn’t exist.`,
  (name) => `${name} discovers a glowing portal behind a vending machine and decides to investigate without thinking.`,
  (name) => `${name} tries to solve a mystery but gets distracted by a dramatic monologue from a talking sandwich.`,
  (name) => `${name} accidentally activates a cosmic button labeled “DO NOT PRESS” and the universe sneezes.`,
  (name) => `${name} challenges a robot to a dance battle and somehow wins by honking, blinking, or yelling.`,
];
