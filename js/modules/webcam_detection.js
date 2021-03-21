const d = document,
  n = navigator;

export function webcam(id) {
  const $video = d.getElementById(id);
  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        console.log(stream);
        $video.srcObject = stream;
        $video.play();
      })
      .catch((err) => {
        $video.insertAdjacentHTML(
          "beforebegin",
          `<p>¡Sucedió el siguiente error!: <mark>${err}</mark></p>`
        );
        console.error(`"¡Sucedió el siguiente error!: " ${err}`);
      });
  }
}
