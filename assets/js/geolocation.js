(function() {
  var cardiff, deg2rads, distanceBetweenPoints, london;

  navigator.geolocation.getCurrentPosition(function(position) {
    var dcKilometers, dcMiles, dlKilometers, dlMiles, latRads, longRads;
    console.log(position);
    $('#lat').text(position.coords.latitude);
    $('#long').text(position.coords.longitude);
    $('#accuracy').text(position.coords.accuracy);
    latRads = deg2rads(position.coords.latitude);
    longRads = deg2rads(position.coords.longitude);
    cardiff.latRads = deg2rads(cardiff.lat);
    cardiff.longRads = deg2rads(cardiff.long);
    london.latRads = deg2rads(london.lat);
    london.longRads = deg2rads(london.long);
    dcKilometers = distanceBetweenPoints(latRads, longRads, cardiff.latRads, cardiff.longRads);
    dcMiles = distanceBetweenPoints(latRads, longRads, cardiff.latRads, cardiff.longRads, 3958.75587);
    dlKilometers = distanceBetweenPoints(latRads, longRads, london.latRads, london.longRads);
    dlMiles = distanceBetweenPoints(latRads, longRads, london.latRads, london.longRads, 3958.75587);
    $('#dist2cardiff').text(dcKilometers.toFixed(2));
    $('#dist2london').text(dlKilometers.toFixed(2));
    $('#dist2cardiffmiles').text(dcMiles.toFixed(2));
    return $('#dist2londonmiles').text(dlMiles.toFixed(2));
  });

  london = {
    lat: -7.752023200000000000,
    long: 110.491368800000030000
  };

  cardiff = {
    lat: -7.607873800000000000,
    long: 110.203751300000020000
  };

  deg2rads = function(degrees) {
    return degrees * (Math.PI / 180);
  };

  distanceBetweenPoints = function(lat1, lon1, lat2, lon2, R) {
    if (R == null) {
      R = 6371;
    }
    return Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1)) * R;
  };

}).call(this);
