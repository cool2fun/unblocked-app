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
    filter: [`driving`, `sports`, `all`],
    link: `Slope`,
    imgsrc: `slope.png`,
    name: `Slope`,
    developer: `Rob Kay`,
    desc: `Play Slope Game, an endless space run game. Drive a ball in the 3D running game in Slope Game. Easy to controls, high speed, and addictive gameplay.

Drive your ball to follow the straight line in space and avoid obstacles as they crash through the race.

With high speed and racetrack in space, slope game improves your reflexes and reactions, provides hours of fun, and relaxes.

If you enjoy high-speed platform games, you will be addicted to this game after the first play.

Players only need to use the keyboard arrow keys to play the Slope game. The real-time gameplay is flexible and players only have to change their movements small enough. The ball's gestures get pronounced as players keep up keyboard keys for longer.

just drive the ball and guid it around the racetrack. Note that the racetrack is infinite - no levels or stages are needed to finish. Only try to keep the ball to a high score as long as possible.`,
    controls: [`W/I: Jump`, `E/O: Shoot`]
  },
];

//Fetch game count
const gamescounter = document.getElementById("games-count");

if (gamescounter != null) {
  gamescounter.innerText = gamesArr.length;
}
