/*
    Assignment 4
    {Your name here}
*/

$(document).ready(function () {
  let oldLatitude, oldLongitude;

  // checking if the WebStorage is available
  if (typeof Storage !== "undefined") {
    // retrieving the location from the localStorage
    oldLatitude = localStorage.getItem("latitude");
    oldLongitude = localStorage.getItem("longitude");
  } else {
    $("#youarehere").append(
      `<p>Web Storage is not available in the browser</p>`
    );
  }

  // checking if the previous location is available
  if (oldLatitude && oldLongitude) {
    $("#youarehere").append(
      `<p> You previous location was at latitue: ${oldLatitude}, longitude: ${oldLongitude}</p>`
    );
  } else {
    $("#youarehere").append("<h3>Welcome to the Website</h3>");
  }

  // checking if the Geolocation is available
  if (!navigator.geolocation) {
    $("#youarehere").append(
      `<p>Gelocation is not available in the browser</p>`
    );
  } else {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;

      $("#youarehere").append(
        `<p> Your current location is at latitue: ${lat}, longitude: ${long}</p>`
      );

      // if old location is available then, calculate distance between new location and old location
      if (oldLatitude && oldLongitude) {
        const pLat = parseFloat(oldLatitude);
        const pLong = parseFloat(oldLongitude);
        const distanceMoved = calcDistance(pLat, pLong, lat, long);

        $("#youarehere").append(
          `<p> Distance moved from your previous location to your current location is ${distanceMoved}</p>`
        );
      }

      // saving the new location to the localStorage
      localStorage.setItem("latitude", lat);
      localStorage.setItem("longitude", long);
    });
  }

  // function to calculate the distance in metres between two lat/long pairs on Earth
  // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
  // Aren't those cool variable names? Yah gotta love JavaScript
  function calcDistance(lat1, lon1, lat2, lon2) {
    var toRadians = function (num) {
      return (num * Math.PI) / 180;
    };
    var R = 6371000; // radius of Earth in metres
    var φ1 = toRadians(lat1);
    var φ2 = toRadians(lat2);
    var Δφ = toRadians(lat2 - lat1);
    var Δλ = toRadians(lon2 - lon1);

    var a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  }
});
