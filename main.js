var map1, map2, map3;

function initialize(){

    var boston = new google.maps.LatLng(42.3631, -71.0064);
    var prov =  new google.maps.LatLng(41.7239, -71.4283);

    var mapOptions1 = {
        scrollwheel: false,
        center: new google.maps.LatLng(42.3631, -71.0064),
        zoom: 8
    };

    var mapOptions2 = {
        scrollwheel: false,
        center: new google.maps.LatLng(41.7239, -71.4283),
        zoom: 8
    };

    var mapOptions3 = {
        scrollwheel: false,
        center: new google.maps.LatLng(42.010530, -71.271057),
        zoom: 9
    };

    map1 = new google.maps.Map(document.getElementById("boston-canvas"),
        mapOptions1);

    map2 = new google.maps.Map(document.getElementById("prov-canvas"),
        mapOptions2);

    map3 = new google.maps.Map(document.getElementById("events-map"),
        mapOptions3);

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

setEventMarkers(map3, events);

}//end initialize

var events = [
    ["Providence T.F. Green Airport", 41.7239, -71.4283],
    ["Boston Logan Airport", 42.3631, -71.0064],
    ["Ceremony- St. Mary's", 41.671175, -71.270703],
    ["Reception- Blithewold", 41.654135, -71.265996],
    ["Newport", 41.490102, -71.312829],
    ["Hotels- Middletown & Portsmouth", 41.525894, -71.296583]
];

function setEventMarkers(map, locations){
    for (var i = 0; i < locations.length; i++) {
        var event = locations[i];
        var myLatLng = new google.maps.LatLng(event[1], event[2]);
        var infowindow = new google.maps.InfoWindow({
            content: event[0]
        });
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            animation: google.maps.Animation.DROP,
            title: event[0],
            infowindow: infowindow
        });
        google.maps.event.addListener(marker, 'click', function() {
          this.infowindow.open(map,this);
        });
    }
}


google.maps.event.addDomListener(window, 'load', initialize);
