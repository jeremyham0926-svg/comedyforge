// Fetch characters from the backend
fetch('https://comedyforge.onrender.com/api/characters')
  .then(response => response.json())
  .then(characters => {
    const container = document.getElementById('characters');
function generateScene(characterName) {
  console.log(`Generating a scene for ${characterName}...`);
  alert(`Scene generation coming soon for ${characterName}!`);
}
function playVoice(characterName) {
  console.log(`Playing voice line for ${characterName}...`);
  alert(`Voice lines coming soon for ${characterName}!`);
}

    characters.forEach(char => {
  const div = document.createElement('div');
div.className = 'character-card';
div.style.background = char.background;

div.innerHTML = `
  <img class="character-image" src="images/${char.image}" alt="${char.name}">
  <div class="character-name">${char.name}</div>
  <div class="character-role">${char.role}</div>
  <div class="character-description">${char.description}</div>
  <button class="scene-button" onclick="generateScene('${char.name}')">Generate Scene</button>
`;
<button class="voice-button" onclick="playVoice('${char.name}')">Play Voice Line</button>



  container.appendChild(div);
});

  })
  .catch(err => console.error('Error fetching characters:', err));
