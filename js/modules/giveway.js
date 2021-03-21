const d = document;

export function draw(btn, selector) {
  const getWinner = (selector) => {
    const $players = d.querySelectorAll(selector),
      random = Math.floor(Math.random() * $players.length),
      winner = $players[random];

    /*     console.log($players, random, winner);
     */ return `El ganador es: ${winner.textContent}`;
  };
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let result = getWinner(selector);
      alert(result);
      /* console.log(result); */
    }
  });
}
