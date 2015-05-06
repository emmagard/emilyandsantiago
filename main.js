var map1, map2;

function initialize(){

    var boston = new google.maps.LatLng(42.3631, -71.0064);
    var prov =  new google.maps.LatLng(41.7239, -71.4283);

    var mapOptions1 = {
        center: new google.maps.LatLng(42.3631, -71.0064),
        zoom: 8
    };

    var mapOptions2 = {
        center: new google.maps.LatLng(41.7239, -71.4283),
        zoom: 8
    };

    map1 = new google.maps.Map(document.getElementById("boston-canvas"),
        mapOptions1);

    map2 = new google.maps.Map(document.getElementById("prov-canvas"),
        mapOptions2);

    var marker1 = new google.maps.Marker({
        position: boston,
        map: map1,
        title: 'Logan Airport'
    });

    var marker2 = new google.maps.Marker({
        position: prov,
        map: map2,
        title: 'TF Green Airport'
    });

}//end initialize


google.maps.event.addDomListener(window, 'load', initialize);
