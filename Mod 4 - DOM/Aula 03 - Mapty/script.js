const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

navigator.geolocation.getCurrentPosition(
  function (position) {
    console.log(position);

    const { latitude } = position.coords;
    const { longitude } = position.coords;

    const coords = [latitude, longitude];

    console.log(latitude, longitude);

    const map = L.map("map").setView(coords, 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker(coords).addTo(map).bindPopup("Você está aqui").openPopup();

    map.on("click", function (mapEvent) {
      const { lat, lng } = mapEvent.latlng;
      L.marker(mapEvent.latlng)
        .addTo(map)
        .bindPopup(
          L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: true,
            closeOnClick: true,
            className: "running-popup",
          })
        )
        .setPopupContent("Novo")
        .openPopup();
    });

    console.log(`https://www.google.com.br/maps/@${latitude},${longitude}`);
  },
  function () {
    alert("nao foi possível obter sua localização");
  }
);
