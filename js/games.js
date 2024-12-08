const games = [
    { name: "Slope", image: "image/slope.png", description: "Endless Runner", link: "/slope.html", category: "Action" },
    { name: "3 Pandas In Japan", image: "image/3-pandas-in-japan.png", description: "developed by Flash Team", link: "/3-pandas-in-japan.html", category: "Adventure" },
    { name: "Retro Bowl", image: "image/retro-bowl.png", description: "Simulation Game", link: "/retro-bowl.html", category: "Sports" },
    { name: "Run 3", image: "image/run-3.png", description: "Coolmath Games classic", link: "run-3.html", category: "Action" },
    { name: "Adam And Eve 7", image: "image/adam-and-eve-7.png", description: "adventure game", link: "adam-and-eve-7.html", category: "Adventure" },
    { name: "Boxing Random", image: "image/boxing-random.png", description: "MultiPlayer", link: "boxing-random.html", category: "Sports,Fighting" },
    { name: "3D Bowling", image: "image/3d-bowling.png", description: "bowling skills practice", link: "/3d-bowling.html", category: "Sports" },
    { name: "Cookie Clicker 2", image: "image/cookie-clicker-2.png", description: "Clicker Games", link: "/cookie-clicker-2.html", category: "Simulation" },
];

/*createGameCard*/

function createGameCard(game) {
    return `
        <div class="game-card">
            <img src="${game.image}" alt="${game.name}">
            <div class="game-info">
                <h3>${game.name}</h3>
                <p>${game.description}</p>
                <a href="${game.link}" class="play-button">Play</a>
            </div>
        </div>
    `;
}

/*renderGames*/

function renderGames() {
    const gameGrid = document.getElementById('gameGrid');
    gameGrid.innerHTML = games.map(createGameCard).join('');
}

function renderOtherGames() {
    const otherGamesList = document.getElementById('otherGamesList');
    if (!otherGamesList) return;

    const shuffledGames = games.sort(() => 0.5 - Math.random());
    const otherGames = shuffledGames.slice(0, 4);
    otherGamesList.innerHTML = otherGames.map(createGameCard).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderGames();
    renderOtherGames();
});

/*cate*/

function loadCategoryGames() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    document.getElementById('categoryTitle').textContent = category || 'All Games';
    
    const filteredGames = category ?
        games.filter(game => game.category.split(',').includes(category)) :
        games;
    
    const gameGrid = document.getElementById('gameGrid');
    gameGrid.innerHTML = filteredGames.map(createGameCard).join('');
}

document.addEventListener('DOMContentLoaded', loadCategoryGames);