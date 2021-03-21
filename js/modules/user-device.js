const d = document,
  n = navigator,
  ua = n.userAgent;

export function userDeviceInfo(id) {
  const $id = d.getElementById(id),
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone/i),
      any: function () {
        return this.android() || this.ios();
      },
    },
    isDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    isBrowser = {
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera|opera mini/i),
      ie: () => ua.match(/msie|iemobile/i),
      edge: () => ua.match(/edge/i),
      any: function () {
        return (
          this.chrome() ||
          this.safari() ||
          this.firefox() ||
          this.opera() ||
          this.ie() ||
          this.edge()
        );
      },
    };
  $id.innerHTML = `<ul>
  <li>User Agent: <b>${ua}</b></li>
  <li>Platform: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
  <li> Browser: <b>${isBrowser.any()}</b></li>
  </ul>`;

  /*Exclusive Content*/
  if (isBrowser.chrome()) {
    $id.innerHTML += `<p><mark> This content is only for Chrome </mark></p>`;
  }
  if (isBrowser.firefox()) {
    $id.innerHTML += `<p><mark> This content is only for Firefox </mark></p>`;
  }
  if (isDesktop.linux()) {
    $id.innerHTML += `<p><mark> Download own app for Linux </mark></p>`;
  }
  if (isDesktop.mac()) {
    $id.innerHTML += `<p><mark> Download own app for Mac OS </mark></p>`;
  }
  if (isDesktop.windows()) {
    $id.innerHTML += `<p><mark> Download own app for Windows </mark></p>`;
  }
  /*Redirections*/
  if (isMobile.android()) {
    window.location.href = "https://github.com/dflr10";
  }
}
