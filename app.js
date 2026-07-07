// Fetch characters from the backend
fetch('https://comedyforge.onrender.com/api/characters')


  .then(response => response.json())
  .then(characters => {
    const container = document.getElementById('characters');

    characters.forEach(char => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h2>${char.name}</h2>
        <p>${char.description}</p>
        <hr />
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error('Error fetching characters:', err));
