const d = document;

export function digitalWatch(watch, btnEnable, btnDisable) {
  let tempo;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnEnable)) {
      tempo = setInterval(() => {
        let date = new Date().toLocaleDateString();
        let hour = new Date().toLocaleTimeString();
        d.querySelector(watch).innerHTML = `<h3>${hour + " - " + date}</h3>`;
      }, 1000);

      e.target.disabled = true;
    }

    if (e.target.matches(btnDisable)) {
      clearInterval(tempo);
      d.querySelector(watch).innerHTML = null;
      d.querySelector(btnEnable).disabled = false;
    }
  });
}
export function alarm(sound, btnPlay, btnStop) {
  let tempoA;
  const $alarm = d.createElement("audio");
  $alarm.src = sound;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      tempoA = setTimeout(() => {
        $alarm.play();
      }, 1000);
      e.target.disabled = true;
    }
    if (e.target.matches(btnStop)) {
      clearInterval(tempoA);
      $alarm.pause();
      $alarm.currentTime=0;
      d.querySelector(btnPlay).disabled = false;
    }
  });
}
