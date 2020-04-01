
function initMap()  {

      const loc = { lat: 47.909381 , lng: 106.936111};
      const map = new google.maps.Map(document.querySelector ('map'),
      {
      zoom: 14,
      center: loc
});

const Marker =new google.maps.Marker({position: loc, map:map});
}



