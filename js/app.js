$(function(){

  mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dGgiLCJhIjoicGFzV1ZkWSJ9.KeK3hKmM52XpUEHHx_F8NQ';
  // Create a map in the div #map
  new mapboxgl.Map({
    container: 'map',
    style: 'style.json'
  });

});
