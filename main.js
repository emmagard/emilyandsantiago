function initialize(){

    var boston = new google.maps.LatLng(42.360082, -71.05888);
    var prov =  new google.maps.LatLng(41.7239, -71.4283);

    var mapOptions1 = {
        center: new google.maps.LatLng(42.360082, -71.05888),
        zoom: 8
    };

    var mapOptions2 = {
        center: new google.maps.LatLng(41.7239, -71.4283),
        zoom: 8
    };

    var map1 = new google.maps.Map(document.getElementById("boston-canvas"),
        mapOptions1);

    var map2 = new google.maps.Map(document.getElementById("prov-canvas"),
        mapOptions2);

}//end initialize


google.maps.event.addDomListener(window, 'load', initialize);
