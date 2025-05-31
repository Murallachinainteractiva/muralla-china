
var map = L.map('map').setView([40.4, 116.6], 5);

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Placeholder example: línea simbólica de la muralla Ming (en rojo)
var mingWall = L.polyline([
    [40.6769, 117.2319],
    [40.4319, 116.5704],
    [40.2673, 115.8891]
], {
    color: 'red',
    weight: 4
}).addTo(map).bindPopup("Sección Ming");

// Placeholder: sección Han en azul
var hanWall = L.polyline([
    [40.1, 111.3],
    [39.9, 110.8],
    [39.7, 110.1]
], {
    color: 'blue',
    weight: 3
}).addTo(map).bindPopup("Sección Han");
