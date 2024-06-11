const gamesArr = [
  /*{
    filter: [`shoot`, `mp`],
    link: `sample`,
    imgsrc: `rooftop.jpg`,
    name: `Sample Game`,
    developer: `Sample Game Creator`,
    desc: `Sample Description`,
    controls: [`←/→ Arrow Keys: Move horizontally`]
  },*/
  {
    filter: [`shoot`, `mp`, `fight`],
    link: `rooftop-snipers`,
    imgsrc: `rooftop.jpg`,
    name: `Rooftop Snipers`,
    developer: `Pat Eichler`,
    desc: `Rooftop Snipers is a chaotic two button local multiplayer game. Challenge your friends side by side or play the computer. Shoot your opponent off the map to win.`,
    controls: [`W/I: Jump`, `E/O: Shoot`]
  },
  {
    filter: [`driving`, `sports`, `mp`],
    link: `slope`,
    imgsrc: `slope.png`,
    name: `Slope`,
    developer: `Rob Kay`,
    desc: `Play Slope Game, an endless space run game. Drive a ball in the 3D running game in Slope Game. Easy to controls, high speed, and addictive gameplay.`,
    controls: [`W/I: Jump`, `E/O: Shoot`]
  },
];

//Fetch game count
const gamescounter = document.getElementById("games-count");

if (gamescounter != null) {
  gamescounter.innerText = gamesArr.length;
}
