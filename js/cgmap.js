  function init(){
    var element = document.getElementById('canvas');
	var myLocation = new google.maps.LatLng(41.692266, -87.681491);
	var mapOptions = {
	  center: myLocation,
	  zoom: 18,
	  mapTypeId: google.maps.MapTypeId.SATELLITE,
	  mapTypeControlOptions: {
		postion: google.maps.ControlPosition.BOTTOM_CENTER}
	};
	
  var marker;

  var map = new google.maps.Map(element, mapOptions);
  
  marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 41.692266, lng: -87.681491}
  });
  marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
