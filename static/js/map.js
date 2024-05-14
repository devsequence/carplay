function mapInitialize() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: mycenter,
        zoom: 15,
        disableDefaultUI: true
    });
    const marker = new google.maps.Marker({
        position: myLatLng,
        map,
    });

}
