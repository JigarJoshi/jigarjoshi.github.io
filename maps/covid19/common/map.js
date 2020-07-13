function viewableString(str) {
    if (!str || 0 === str.length){
      return "Not Available";
    }else{
      return str;
    }
}

function toTitleCase(str) {
    return viewableString(str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }));
}

function renderMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: new google.maps.LatLng(centerOfMap.lat, centerOfMap.lng),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < locations.length; i++) {
    var name  = toTitleCase(locations[i][0]);
    var address = toTitleCase(locations[i][3]);
    var mapped = false;
    if (parseFloat(locations[i][1]) > 0) {
      mapped = true;
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(parseFloat(locations[i][1]), parseFloat(locations[i][2])),
        title: name + '_' + address,
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent("<h1 style='font-size:4.5vw;'> Name: " + toTitleCase(locations[i][0]) + '<br/> Addr: ' + toTitleCase(locations[i][3]) + "</h1>");
          infowindow.open(map, marker);
        }
      })(marker, i));

    }
    var dataTable = document.getElementById("data-table");
    if (dataTable) {
        var newRow;
        var mappedStatus = "Location Unavailable";
        newRow = dataTable.insertRow(1);
        if(mapped){
          mappedStatus = "Mapped";
        }
        var srNoCell = newRow.insertCell(0);
        var nameCell = newRow.insertCell(1);
        var addressCell = newRow.insertCell(2);
        var mapStatusCell = newRow.insertCell(3);
        srNoCell.appendChild(document.createTextNode(locations[i][4]));
        nameCell.appendChild(document.createTextNode(name));
        addressCell.appendChild(document.createTextNode(address));
        mapStatusCell.appendChild(document.createTextNode(mappedStatus));
    }

  }
  // print stats
  var statsElement = document.getElementById("covid19Stats");
  if (statsElement) {
    statsElement.innerHTML += "| Mapped active cases : " + locations.length;
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
