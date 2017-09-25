// /where script.js

function success(pos) {
  var coords = pos.coords;

  addGMap(coords)
  addGLink(coords, "donuts")
  addGLink(coords, "groceries")
  addGLink(coords, "planet-fitness")
};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

// TODO(adam): planet fitnesses

function addGMap(coords) {
  var ifr = document.createElement("iframe");
  ifr.src = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d190253.31038971894!2d" + coords.longitude + "!3d" + coords.latitude + "!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slocal+attractions!5e0!3m2!1sen!2sus!4v1506306393285"
  ifr.width = "600"
  ifr.height = "450"
  ifr.frameborder = "0"
  ifr.style = "border:0px solid black"

  document.querySelector("#gmaps").appendChild(ifr);
}

function addGLink(coords, id) {
  var inner = document.createElement("a");
  inner.setAttribute('href', "https://www.google.com/maps/search/local+" + id.replace(new RegExp('-', 'g'), '+') + "+stores/@" + coords.latitude + "," + coords.longitude + ",11z");
  inner.textContent = id.replace(new RegExp('-', 'g'), ' ');
  document.querySelector("#" + id).appendChild(inner);
}

navigator.geolocation.getCurrentPosition(success, error, {
  enableHighAccuracy: true,
  timeout: 10000, // 10s, in ms
  maximumAge: 0
});
