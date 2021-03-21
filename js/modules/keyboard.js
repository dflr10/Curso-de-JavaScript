const d = document;
let x = 0,
  y = 0;

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();

  switch (e.keyCode) {
    //left
    case 37:
      if (limitsBall.left > limitsStage.left) {
        e.preventDefault();
        x--;
      }
      break;
    //up
    case 38:
      if (limitsBall.top > limitsStage.top) {
        e.preventDefault();
        y--;
      }
      break;
    //right
    case 39:
      if (limitsBall.right < limitsStage.right) {
        e.preventDefault();
        x++;
      }
      break;
    //down
    case 40:
      if (limitsBall.bottom < limitsStage.bottom) {
        e.preventDefault();
        y++;
      }
      break;
    default:
      break;
  }
  $ball.style.transform = `translate(${x * 13}px,${y * 13}px)`;
}

export function shortcuts(e) {
  /*  console.log(e.type);
       console.log(e.key);
       console.log(e.keyCode);
       console.log(`ctrl: ${e.ctrlKey}`);
       console.log(`alt: ${e.altKey}`);
       console.log(`shift: ${e.shiftKey}`);
       console.log(e); */
  if (e.key == "a" && e.altKey)
    alert("'ALERTA' Has presionado la combinación de teclas Alt + A");
  if (e.key == "c" && e.altKey)
    confirm("'CONFIRMACIÓN' Has presionado la combinación de teclas Alt + C");
  if (e.key == "p" && e.altKey)
    prompt(" 'AVISO' Has presionado la combinación de teclas Alt + P");
}
