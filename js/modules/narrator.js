const d = document,
  w = window;

export function speeshReader() {
  const $speechSelect = d.getElementById("speech-select"),
    $speechTextarea = d.getElementById("speech-text"),
    $speechBtn = d.getElementById("speech-btn"),
    speechMessage = new SpeechSynthesisUtterance();

  //console.log(speechMessage);

  let voices = [];

  d.addEventListener("DOMContentLoaded", (e) => {
    /*     console.log(w.speechSynthesis.getVoices());
    console.log(w.speechSynthesis); */
    w.speechSynthesis.addEventListener("voiceschanged", (e) => {
      //console.log(e);
      voices = w.speechSynthesis.getVoices();
      //console.log(voices);
      voices.forEach((voice) => {
        const $option = d.createElement("option");
        ("option");
        $option.value = voice.name;
        $option.textContent = `${voice.name} *** ${voice.lang}`;
        $speechSelect.appendChild($option);
      });
    });
  });
  d.addEventListener("change", (e) => {
    if (e.target === $speechSelect) {
      speechMessage.voice = voices.find(
        (voice) => voice.name === e.target.value
      );
    }
    //console.log(speechMessage);
  });
  d.addEventListener("click", (e) => {
    if (e.target === $speechBtn) {
      speechMessage.text = $speechTextarea.value;
      w.speechSynthesis.speak(speechMessage);
    }
  });
}
