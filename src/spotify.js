//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3002/";
const clientId = "c912d114cb1c48d6a6cfa72196ba5a10";

//allowing permissions on Spotify app
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      //#access_token=BQAKW2dc_Z0xkvaTsFXPJmNuUB2vFv4mZ_OxkKIZjY1tdAj3mob_xI4qxrvkicMEJPW7OItkDfXo2tEPVPGxbHQx3Dq4q4_SIDauIcsGftO4O8GQr1hMux_mEHivP2wrUhZWXJE3vSgj5U9qP8Zr_lCtk_WNPi7zBiZ774dplnJLD_8M&token_type=Bearer&expires_in=3600
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
