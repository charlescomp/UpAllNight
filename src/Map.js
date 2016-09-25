var React = require('react');

var MapSection = React.createClass({
  ajaxClass(){
    var request = new XMLHttpRequest();
    request.open('GET', "https://maps.googleapis.com/maps/api/js?key=AIzaSyDcrb7ZRZHXaRTCk-7dmT_WEc5wvt41cn4", true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        this.initMap(data)
      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
  },
  initMap(){
    var myLatLng = {lat: 40.7281, lng: -73.9916};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: myLatLng
    });
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
  },
  render() {
    console.log("map")
    return (
      <section>
        <div id="map"></div>
      </section>
    )
  }
})


module.exports = MapSection;