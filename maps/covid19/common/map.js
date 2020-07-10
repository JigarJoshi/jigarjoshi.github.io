function renderMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: new google.maps.LatLng(centerOfMap.lat, centerOfMap.lng),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(parseFloat(locations[i][1]), parseFloat(locations[i][2])),
      title: locations[i][0] + '_' + locations[i][3],
      map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent("<p style='font-size:1.5vw;'> Name: " + locations[i][0] + '<br/> Addr: ' + locations[i][3] + "</p>");
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
  // print stats
  var statsElement = document.getElementById("covid19Stats");
  if(statsElement){
      statsElement.innerHTML += "| Mapped cases : " + locations.length;
  }
}
var map;
var marker;
var latPosition;
var longPosition;

function initialize() {
  var mapOptions = {
    zoom: 20,
    gestureHandling: 'cooperative',
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  initializeMarker();
}

function initializeMarker() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {

      var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      latPosition = position.coords.latitude;
      longPosition = position.coords.longitude;

      marker = new google.maps.Marker({
        position: pos,
        animation: google.maps.Animation.DROP,
        map: map,
      });

      map.setCenter(pos);

    });
  }
}

initialize();
