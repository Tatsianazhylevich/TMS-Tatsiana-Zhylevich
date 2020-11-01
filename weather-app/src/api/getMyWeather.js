import { getWeather } from '../api/getWeather'

export function getMyWeather({coords: {latitude: lat, longitude: lon}}){
    console.log(`${lat}, ${lon}`)
    fetch(`https://eu1.locationiq.com/v1/reverse.php?key=pk.80f74496452169d08d8ab400676ea8d9&lat=${lat}&lon=${lon}&format=json&accept-language=en`)
    .then(response => response.json())
    .then((response) => {
        getWeather(response.address.town);  
    })
}
