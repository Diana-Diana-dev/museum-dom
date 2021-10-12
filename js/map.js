	let cntr = ["2.3364", "48.86091"];
				
	

	// function mapBox(center) {

	mapboxgl.accessToken = 'pk.eyJ1IjoiZGlhbmEtZGlhbmEtZGV2IiwiYSI6ImNrdTA1bHc2dzBieTEycHQ5cDYyYjltdzAifQ.Ap9bgYgu2iwIUa6svB_TNw';
		let map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v11',
		// center: center,
		center: [2.3364, 48.86091],
		zoom: 16
		});






	// Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker({ color: 'red' })
.setLngLat([2.3364, 48.86091])
.addTo(map);

const marker2 = new mapboxgl.Marker({ color: 'red' })
.setLngLat([2.3333, 48.8602])
.addTo(map);

const marker3 = new mapboxgl.Marker({ color: 'red' })
.setLngLat([2.3397, 48.8607])
.addTo(map);

const marker4 = new mapboxgl.Marker({ color: 'red' })
.setLngLat([2.3330, 48.8619])
.addTo(map);

const marker5 = new mapboxgl.Marker({ color: 'red' })
.setLngLat([2.3365, 48.8625])
.addTo(map);
 




	