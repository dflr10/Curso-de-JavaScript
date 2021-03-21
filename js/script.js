import { hamburgerMenu } from "./modules/menu.js";
import { digitalWatch, alarm } from "./modules/watch.js";
import { moveBall, shortcuts } from "./modules/keyboard.js";
import { countdown } from "./modules/countdown.js";
import { scrollTopBtn } from "./modules/btn_scroll.js";
import { darkModeBtn } from "./modules/dark_mode.js";
import { responsiveMedia } from "./modules/responsive.js";
import { responsiveTester } from "./modules/test_responsive.js";
import { userDeviceInfo } from "./modules/user-device.js";
import { networkStatus } from "./modules/network_status.js";
import { webcam } from "./modules/webcam_detection.js";
import { getGeolocation } from "./modules/geolocation.js";
import { searchFilters } from "./modules/search_filter.js";
import { draw } from "./modules/giveway.js";
import { slider } from "./modules/slider.js";
import { scrollSpy } from "./modules/scroll_spy.js";
import { smartVideo } from "./modules/smart_video.js";
import { contactValidations } from "./modules/validation_form.js";
import { speeshReader } from "./modules/narrator.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalWatch(
    "#watch",
    "#enable-watch",
    "#disable-watch",
    "#enable-alarm",
    "#disable-alarm"
  );
  alarm("assets/alert.mp3", "#enable-alarm", "#disable-alarm");
  countdown("countdown", "May 18, 2021 24:00.00", "¡Happy Bird Day! 🥳🥳🥳");
  scrollTopBtn(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width:1024px)",
    `<a href="https://www.youtube.com/watch?v=miujY3EKNfY&ab_channel=Johancifuentes" target="_blank rel="noopener">Ver Vídeo</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/EosncdAanhQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width:1024px)",
    `<a href="https://goo.gl/maps/2QTDNdpbqTk7nGaM7" target="_blank rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7932.013801183798!2d-75.57722773289115!3d6.262820191849097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428e678fd90af%3A0x483eb5aade56b0b!2sUniversidad%20Nacional%20de%20Colombia%20Sede%20Medell%C3%ADn!5e0!3m2!1ses!2sco!4v1603422086691!5m2!1ses!2sco" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webcam("webcam");
  getGeolocation("geolocation");
  searchFilters(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactValidations();
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkModeBtn(".dark-mode-btn", "dark-mode");
networkStatus();
speeshReader();
