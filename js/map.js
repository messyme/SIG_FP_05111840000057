mapboxgl.accessToken = 'pk.eyJ1IjoibWVzc3ltZSIsImEiOiJja2prdzdqazMyOTJ3MnRwOHo2YWVyaWZyIn0.v33tFdXMmOrQduFwQCzLrQ';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [112.7407336, -7.2894253], // starting position [lng, lat]
    zoom: 12.25 // starting zoom
});

/*
//gedung sate
var marker = new mapboxgl.Marker({
    color: "#d400fa",
    scale: 2
}) 
.setLngLat([107.6188, -6.9024812])
.addTo(map);

//alun-alun bandung
var marker = new mapboxgl.Marker({
    color: "#d400fa",
    scale: 2
}) 
.setLngLat([107.6070141, -6.9218571])
.addTo(map);
*/



map.on('load', function () {
    map.loadImage('https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
        // Add an image to use as a custom marker
        function (error, image) 
        {
            if (error) throw error;
            map.addImage('custom-marker', image);
            
            map.addSource('places', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Feature',
                            'properties': 
                            {
                                'description':
                                '<strong>Vӧlks</strong><p><a href=”https://www.instagram.com/volkscoffeeid/” style="color: rgb(0, 0, 255);">business link</a></p>'
                            },
                            'geometry': 
                            {
                                'type': 'Point',
                                'coordinates': [112.7367425,- 7.2817948]
                            }
                        },

                        {
                            'type': 'Feature',
                            'properties': 
                            {
                                'description':
                                '<strong>Titik Koma</strong><p><a href=”http://tk-coffee.com/ “>business link</a></p>'
                            },
                            'geometry': 
                            {
                                'type': 'Point',
                                'coordinates': [112.7406263,- 7.2930755]
                            }
                        },

                        {
                            'type': 'Feature',
                            'properties': 
                            {
                                'description':
                                '<strong>Gold Dust Coffee & Billiards</strong><p><a href=”https://www.instagram.com/golddustcoffee/”>business link</a></p>'
                            },
                            'geometry': 
                            {
                                'type': 'Point',
                                'coordinates': [112.7438772,- 7.2902554]
                            }
                        },

                        {
                            'type': 'Feature',
                            'properties': 
                            {
                                'description':
                                '<strong>Timoer Kopi – MERR</strong><p><a href=”https://www.instagram.com/timoerkopi/”>business link</a></p>'
                            },
                            'geometry': 
                            {
                                'type': 'Point',
                                'coordinates': [112.7822757,- 7.2630001]
                            }
                        },

                        {
                            'type': 'Feature',
                            'properties': 
                            {
                                'description':
                                '<strong>Cocoro</strong><p><a href=”http://instagram.com/cocoro.sub”>business link</a></p>'
                            },
                            'geometry': 
                            {
                                'type': 'Point',
                                'coordinates': [112.7959549,- 7.2620423]
                            }
                        },

                        {
                            'type': 'Feature',
                            'properties': 
                            {
                                'description':
                                '<strong>6.	Wdnsdy Café</strong><p><a href=”https://www.wdnsdy.cc/”>business link</a></p>'
                            },
                            'geometry': 
                            {
                                'type': 'Point',
                                'coordinates': [112.7308846,-7.2950443]
                            }
                        },

                        {
                            'type': 'Feature',
                            'properties': 
                            {
                                'description':
                                '<strong>HALO KOPI ft DB</strong><p><a href=”https://www.instagram.com/halokopi.db/”>business link</a></p>'
                            },
                            'geometry': 
                            {
                                'type': 'Point',
                                'coordinates': [112.7821469,-7.2718974]
                            }
                        },

                        {
                            'type': 'Feature',
                            'properties': 
                            {
                                'description':
                                '<strong>Typica Kopi</strong><p><a href=”https://typica-kopi-rasa-nusantara.business.site/”>business link</a></p>'
                            },
                            'geometry': 
                            {
                                'type': 'Point',
                                'coordinates': [112.8055036, -7.265565]
                            }
                        },

                        {
                            'type': 'Feature',
                            'properties': 
                            {
                                'description':
                                '<strong>ROCKETMAN COFFEE Gayungan</strong><p><a href=”https://www.instagram.com/rocketman.coffee/ “>business link</a></p>'
                            },
                            'geometry': 
                            {
                                'type': 'Point',
                                'coordinates': [112.7267647, -7.3242556]
                            }
                        },

                        {
                            'type': 'Feature',
                            'properties': 
                            {
                                'description':
                                '<strong>IMHO coffee</strong><p><a href=”https://www.instagram.com/imhocoffee.id/ “>business link</a></p>'
                            },
                            'geometry': 
                            {
                                'type': 'Point',
                                'coordinates': [112.7422357, -7.2627447]
                            }
                        },

                        {
                            'type': 'Feature',
                            'properties': 
                            {
                                'description':
                                '<strong>Pelipur Lara Coffee Untung Suropati</strong><p><a href=”https://pelipur-lara-coffee-untung-suropati.business.site/?utm_source=gmb&utm_medium=referral”>business link</a></p>'
                            },
                            'geometry': 
                            {
                                'type': 'Point',
                                'coordinates': [112.7367854, -7.2854771]
                            }
                        },

                        {
                            'type': 'Feature',
                            'properties': 
                            {
                                'description':
                                '<strong>KOPI CUAN</strong><p><a href=”https://www.instagram.com/kopicuan/”>business link</a></p>'
                            },
                            'geometry': 
                            {
                                'type': 'Point',
                                'coordinates': [112.7360022, -7.2850514]
                            }
                        },

                        {
                            'type': 'Feature',
                            'properties': 
                            {
                                'description':
                                '<strong>Coffee TGC </strong><p><a href=”http://coffeetgc.com/”>business link</a></p>'
                            },
                            'geometry': 
                            {
                                'type': 'Point',
                                'coordinates': [112.7418172, -7.2644263]
                            }
                        },

                        {
                            'type': 'Feature',
                            'properties': 
                            {
                                'description':
                                '<strong>KOPI GOBER</strong><p><a href=”https://www.instagram.com/kopi_gober/”>business link</a></p>'
                            },
                            'geometry': 
                            {
                                'type': 'Point',
                                'coordinates': [112.7683496, -7.308868]
                            }
                        },

                        {
                            'type': 'Feature',
                            'properties': 
                            {
                                'description':
                                '<strong>DJAJAN KOPI</strong><p><a href=”https://www.instagram.com/djajan.kopi/”>business link</a></p>'
                            },
                            'geometry': 
                            {
                                'type': 'Point',
                                'coordinates': [112.7335131, -7.2868605]
                            }
                        },

                        {
                            'type': 'Feature',
                            'properties': 
                            {
                                'description':
                                '<strong>BLACK KAWA</strong><p><a href=”https://www.instagram.com/blackkawacoffee/”>business link</a></p>'
                            },
                            'geometry': 
                            {
                                'type': 'Point',
                                'coordinates': [112.7342212, -7.3093363]
                            }
                        },

                        {
                            'type': 'Feature',
                            'properties': 
                            {
                                'description':
                                '<strong>TBRK Rumah Kopi</strong><p><a href=”https://www.instagram.com/tbrkrumahkopi/”>business link</a></p>'
                            },
                            'geometry': 
                            {
                                'type': 'Point',
                                'coordinates': [112.7526426, -7.2888932]
                            }
                        },

                        {
                            'type': 'Feature',
                            'properties': 
                            {
                                'description':
                                '<strong>Gawa Café</strong><p><a href=”https://www.instagram.com/gawacafe.id/”>business link</a></p>'
                            },
                            'geometry': 
                            {
                                'type': 'Point',
                                'coordinates': [112.6752126, -7.2966087]
                            }
                        },

                        {
                            'type': 'Feature',
                            'properties': 
                            {
                                'description':
                                '<strong>Historica Coffee and Kitchen</strong><p><a href=”http://www.society.co.id/”>business link</a></p>'
                            },
                            'geometry': 
                            {
                                'type': 'Point',
                                'coordinates': [112.7492523, -7.2693964]
                            }
                        },

                        {
                            'type': 'Feature',
                            'properties': 
                            {
                                'description':
                                '<strong>SPACE RABBIT</strong><p><a href=”http://instagram.com/spacerabbitsub“>business link</a></p>'
                            },
                            'geometry': 
                            {
                                'type': 'Point',
                                'coordinates': [112.7893567, -7.2533151]
                            }
                        },

                        {
                            'type': 'Feature',
                            'properties': 
                            {
                                'description':
                                '<strong>âme coffee</strong><p><a href=”https://www.instagram.com/amecoffee.sub/”>business link</a></p>'
                            },
                            'geometry': 
                            {
                                'type': 'Point',
                                'coordinates': [112.7401114, -7.2905534]
                            }
                        },

                        {
                            'type': 'Feature',
                            'properties': 
                            {
                                'description':
                                '<strong>AUcafé & Rostery</strong><p><a href=”http://instagram.com/aucafe.id”>business link</a></p>'
                            },
                            'geometry': 
                            {
                                'type': 'Point',
                                'coordinates': [112.7647018,-7.2804752]
                            }
                        },

                        {
                            'type': 'Feature',
                            'properties': 
                            {
                                'description':
                                '<strong>NARCOS COFFEE</strong><p><a href=”https://narcoscoffee.business.site/?utm_source=gmb&utm_medium=referral “>business link</a></p>'
                            },
                            'geometry': 
                            {
                                'type': 'Point',
                                'coordinates': [112.7487803, -7.2583386]
                            }
                        },

                        {
                            'type': 'Feature',
                            'properties': 
                            {
                                'description':
                                '<strong>SEPASI Coffe & Eatery</strong><p><a href=”https://www.instagram.com/sepasi.cafe/”>business link</a></p>'
                            },
                            'geometry': 
                            {
                                'type': 'Point',
                                'coordinates': [112.7210248, -7.3314384]
                            }
                        },

                        {
                            'type': 'Feature',
                            'properties': 
                            {
                                'description':
                                '<strong>Saisho Coffee</strong><p><a href=”https://www.instagram.com/saishocoffee/ “>business link</a></p>'
                            },
                            'geometry': 
                            {
                                'type': 'Point',
                                'coordinates': [112.6739895, -7.2910429]
                            }
                        },

                        {
                            'type': 'Feature',
                            'properties': 
                            {
                                'description':
                                '<strong>Kopi Konnichiwa</strong><p><a href=”https://www.instagram.com/kopikonnichiwa/”>business link</a></p>'
                            },
                            'geometry': 
                            {
                                'type': 'Point',
                                'coordinates': [112.6760173,-7.2882334]
                            }
                        },

                        {
                            'type': 'Feature',
                            'properties': 
                            {
                                'description':
                                '<strong>Ruma BRAY – Munchies & Coffee</strong><p><a href=”https://www.instagram.com/rumabray.sub/”>business link</a></p>'
                            },
                            'geometry': 
                            {
                                'type': 'Point',
                                'coordinates': [112.7795613, -7.263511]
                            }
                        },

                        {
                            'type': 'Feature',
                            'properties': 
                            {
                                'description':
                                '<strong>MIKOPI</strong><p><a href=”https://www.instagram.com/mikopi_id/”>business link</a></p>'
                            },
                            'geometry': 
                            {
                                'type': 'Point',
                                'coordinates': [112.7678454,-7.2667144]
                            }
                        },
                        
                    ]
                }
            });
            
            // Add a layer showing the places.
            map.addLayer(
                {
                'id': 'places',
                'type': 'symbol',
                'source': 'places',
                'layout': {
                    'icon-image': 'custom-marker',
                    'icon-allow-overlap': true
                }
            });

            // When a click event occurs on a feature in the places layer, open a popup at the
            // location of the feature, with description HTML from its properties.
            map.on('click', 'places', function (e) {
                var coordinates = e.features[0].geometry.coordinates.slice();
                var description = e.features[0].properties.description;

                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }

                new mapboxgl.Popup()
                    .setLngLat(coordinates)
                    .setHTML(description)
                    .addTo(map);
            });

            // Change the cursor to a pointer when the mouse is over the places layer.
            map.on('mouseenter', 'places', function () {
                map.getCanvas().style.cursor = 'pointer';
            });

            // Change it back to a pointer when it leaves.
            map.on('mouseleave', 'places', function () {
                map.getCanvas().style.cursor = '';
            });
        });   
    
    /*
    // Create a popup, but don't add it to the map yet.
    var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
     
    map.on('mouseenter', 'places', function (e) {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = 'pointer';
        
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;
        
        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
        
        // Populate the popup and set its coordinates
        // based on the feature found.
        popup.setLngLat(coordinates).setHTML(description).addTo(map);
    });
        
    map.on('mouseleave', 'places', function () {
        map.getCanvas().style.cursor = '';
        //popup.remove();
    });
    */
});

// driving direction
map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        language: 'id-ID'
    }),
    'top-left'
);

// Add zoom and rotation controls to the map.
map.addControl(
    new mapboxgl.NavigationControl(),
    'bottom-right'
);

var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');

function switchLayer(layer) {
var layerId = layer.target.id;
map.setStyle('mapbox://styles/mapbox/' + layerId);
}

for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;
}