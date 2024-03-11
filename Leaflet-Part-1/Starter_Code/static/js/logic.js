// Define the URL of the GeoJSON data
const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson";

// Create a Leaflet map centered around the US
const map = L.map('map').setView([37.09, -95.71], 5);

// Add a base map layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Fetch earthquake data from the USGS GeoJSON feed
fetch(url)
    .then(response => response.json())
    .then(data => {
        // Process the GeoJSON data and add markers to the map
        L.geoJSON(data.features, {
            pointToLayer: function(feature, latlng) {
                // Set marker options based on earthquake magnitude and depth
                const radius = feature.properties.mag * 5; // Adjust the multiplier as needed
                const depth = feature.geometry.coordinates[2]; // Depth
                return L.circleMarker(latlng, {
                    radius: radius,
                    fillColor: getColor(depth),
                    color: "#000",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 0.8
                }).bindPopup(`<b>Location:</b> ${feature.properties.place}<br><b>Magnitude:</b> ${feature.properties.mag}`);
            }
        }).addTo(map);

        // Add a legend
        var legend = L.control({position: "bottomright"});
        legend.onAdd = function() {
            var div = L.DomUtil.create("div", "info legend"),
            depth = [-10, 10, 30, 50, 70, 90],
            labels = [];
            
            div.innerHTML += "<h3 style='text-align: center'>Depth</h3>"
            
            for (var i = 0; i < depth.length; i++) {
                labels.push(
                    '<i style="background:' + getColor(depth[i] + 1) + '"></i> ' +
                    depth[i] + (depth[i + 1] ? '&ndash;' + depth[i + 1] + '<br>' : '+')
                );
            }
            
            div.innerHTML += labels.join('');
            
            return div;
        };
        legend.addTo(map);
    });

// Function to get color based on depth
function getColor(depth) {
    return depth > 90 ? '#FF0000' :
           depth > 80 ? '#FF4500' :
           depth > 70 ? '#FFA500' :
           depth > 60 ? '#FFD700' :
           depth > 50 ? '#FFFF00' :
           depth > 40 ? '#ADFF2F' :
           depth > 30 ? '#32CD32' :
           depth > 20 ? '#00FA9A' :
           depth > 10 ? '#00FFFF' :
                        '#87CEEB';
}
