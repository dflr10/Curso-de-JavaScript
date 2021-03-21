const d = document,
  n = navigator;

export function getGeolocation(id) {
  const $id = d.getElementById(id),
    options = {
      enableHigAccuarcy: true,
      timeout: 4000,
      maximumAge: 0,
    };
  const success = (position) => {
    let coords = position.coords;
    console.log(position);
    $id.innerHTML = `<p>📍 Your Actual Position is: </p>
     <ul>
        <li>Latitude: <b>${coords.latitude}</b> </li>
        <li>Longitude: <b>${coords.longitude}</b></li>
        <li>Accuracy: <b>${coords.accuracy}</b> metros</li>
    </ul>
    <a href="https://google.com/maps/@${coords.latitude},${coords.longitude},15z" target="_blank" rel="noopener">Ver en Google Maps</a>`;
  };
  const error = (err) => {
    $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`;
    console.log(`Error: ${err.code}: ${err.message}`);
  };
  n.geolocation.getCurrentPosition(success, error, options);
}
