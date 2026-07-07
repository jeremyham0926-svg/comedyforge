// Fetch characters from the backend
fetch('https://comedyforge.onrender.com/api/characters')
  .then(response => response.json())
  .then(characters => {
    const container = document.getElementById('characters');

    characters.forEach(char => {
      const div = document.createElement('div');
      div.className = 'character-card';

      div.innerHTML = `
        <div class="character-name">${char.name}</div>
        <div class="character-description">${char.description}</div>
      `;

      container.appendChild(div);
    });
  })
  .catch(err => console.error('Error fetching characters:', err));
