// const { latitude } = position.coords;
// const { longitude } = position.coords;

// const coords = [latitude, longitude];

var map = L.map("map", {
  layers: MQ.mapLayer(),
  center: [-28.1014, -48.6394],
  zoom: 12,
});

var dir = MQ.routing.directions();

dir.route({
  locations: ["Raleigh, NC", "Carry,NC"],
});

customRouteLayer = MQ.Routing.RouteLayer.extend({
  createStartMarker: (location) => {
    let custom_icon;
    let marker;

    custom_icon = L.icon({
      iconUrl: "img/red.png",
      iconSize: [20, 29],
      iconAnchor: [10, 29],
      popupAnchor: [0, 29],
    });

    marker = L.marker(location.latLng, { icon: custom_icon });

    return marker;
  },

  createEndMarker: (location) => {
    var custom_icon;
    var marker;

    custom_icon = L.icon({
      iconUrl: "img/blue.png",
      iconSize: [20, 29],
      iconAnchor: [10, 29],
      popupAnchor: [0, 29],
    });

    marker = L.marker(location.latLng, { icon: custom_icon }).addTo(map);

    return marker;
  },
});

map.addLayer(
  new customRouteLayer({
    directions: dir,
    fitBounds: true,
  })
);
