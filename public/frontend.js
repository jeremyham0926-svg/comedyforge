// LOAD CHARACTERS
async function loadCharacters() {
    const res = await fetch("https://comedyforge.onrender.com/characters");
    const data = await res.json();

    const container = document.getElementById("characters");
    container.innerHTML = "";

    data.forEach(char => {
        container.innerHTML += `
            <div class="character-card">
                <h3>${char.name}</h3>
                <p>${char.description}</p>
            </div>
        `;
    });
}

// NORMAL SCENE GENERATOR
document.getElementById("generate-btn").addEventListener("click", async () => {
    const prompt = document.getElementById("scene-prompt").value;

    const res = await fetch("https://comedyforge.onrender.com/scene", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
    });

    const data = await res.json();
    renderScene(data);
});

// CHAOS MODE
document.getElementById("chaos-btn").addEventListener("click", async () => {
    const res = await fetch("https://comedyforge.onrender.com/chaos", {
        method: "POST",
        headers: { "Content-Type": "application/json" }
    });

    const data = await res.json();
    renderScene(data);
});

// RENDER SCENE
function renderScene(data) {
    document.getElementById("scene-output").innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.description}</p>

        <h4>Beat Map</h4>
        <pre>${data.beats}</pre>

        <h4>Dialogue</h4>
        <pre>${data.dialogue}</pre>

        <h4>Camera Notes</h4>
        <pre>${data.camera}</pre>
    `;
}

// INIT
loadCharacters();
