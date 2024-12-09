const games = [
    { name: "Slope", image: "image/slope.png", description: "Endless Runner", link: "/slope.html", category: "Action" },
    { name: "3 Pandas In Japan", image: "image/3-pandas-in-japan.png", description: "developed by Flash Team", link: "/3-pandas-in-japan.html", category: "Adventure" },
    { name: "Retro Bowl", image: "image/retro-bowl.png", description: "Simulation Game", link: "/retro-bowl.html", category: "Sports" },
    { name: "Run 3", image: "image/run-3.png", description: "Coolmath Games classic", link: "run-3.html", category: "Action" },
    { name: "Adam And Eve 7", image: "image/adam-and-eve-7.png", description: "adventure game", link: "adam-and-eve-7.html", category: "Adventure" },
    { name: "Boxing Random", image: "image/boxing-random.png", description: "MultiPlayer", link: "boxing-random.html", category: "Sports,Fighting" },
    { name: "3D Bowling", image: "image/3d-bowling.png", description: "bowling skills practice", link: "/3d-bowling.html", category: "Sports" },
    { name: "Cookie Clicker 2", image: "image/cookie-clicker-2.png", description: "Clicker Games", link: "/cookie-clicker-2.html", category: "Simulation" },
    { name: "Drive Mad", image: "image/drive-mad.png", description: "driving game", link: "/drive-mad.html", category: "Racing,Sports" },
    { name: "G-Switch 4", image: "image/g-switch-4.png", description: "Action", link: "/g-switch-4.html", category: "Adventure,Sports" },
    { name: "Iron Snout", image: "image/iron-snout.png", description: "Fighting", link: "/iron-snout.html", category: "Adventure,Fighting" },
    { name: "Iron Snout", image: "image/iron-snout.png", description: "Fighting", link: "/iron-snout.html", category: "Adventure,Fighting" },
    { name: "Little Alchemy 2", image: "image/little-alchemy-2.png", description: "soccer game", link: "/little-alchemy-2.html", category: "Sports" },
    { name: "Mr Bullet", image: "image/mr-bullet.png", description: "Physics", link: "/mr-bullet.html", category: "Shooting,Action" },
    { name: "Papa Cherry Saga", image: "image/papa-cherry-saga.png", description: "Puzzle", link: "/papa-cherry-saga.html", category: "Puzzle" },
    { name: "Rooftop Snipers", image: "image/rooftop-snipers.png", description: "Puzzle", link: "/rooftop-snipers.html", category: "Action,Shooting" },
    { name: "Stick Merge 2", image: "image/stick-merge-2.png", description: "Action", link: "/stick-merge-2.html", category: "Action,Shooting" },
    { name: "Rusher Crusher", image: "image/rusher-crusher.png", description: "Action Driving", link: "/rusher-crusher.html", category: "Action" },
    { name: "Subway Surfers", image: "image/subway-surfers.png", description: "Endless Runner", link: "/subway-surfers.html", category: "Action,Arcade,Adventure" },
    { name: "Super Mario", image: "image/super-mario-wonder.png", description: "Platform, Action, Adventure", link: "/super-mario-wonder.html", category: "Arcade,Adventure" },
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
    if (!gameGrid) return;

    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    const categoryTitle = document.getElementById('categoryTitle');
    if (categoryTitle) {
        categoryTitle.textContent = category || 'All Games';
    }

    const filteredGames = category
        ? games.filter(game => game.category.split(',').includes(category))
        : games;

    gameGrid.innerHTML = filteredGames.map(createGameCard).join('');
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