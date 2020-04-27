  function init(){
    var element = document.getElementById('canvas');
	var myLocation = new google.maps.LatLng(41.692222, -87.681459);
	var mapOptions = {
	  center: myLocation,
	  zoom: 18,
	  mapTypeId: google.maps.MapTypeId.SATELLITE,
	  mapTypeControlOptions: {
		position: google.maps.ControlPosition.BOTTOM_CENTER}
	};
	
  var marker;

  var myMap = new google.maps.Map(element, mapOptions);
  
  marker = new google.maps.Marker({
    map: myMap,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 41.692222, lng: -87.681459}
  });
  
  marker.addListener('click', toggleBounce);
  function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
  }; 
}
 google.maps.event.addDomListener(window, 'load', init);
