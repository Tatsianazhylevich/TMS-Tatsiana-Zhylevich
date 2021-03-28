import {map, renderTableRow} from '../servises'


export function getWeather(city){
    return fetch(`http://api.weatherstack.com/current?access_key=8a2380626129e4b4b0b74c8703d3d9c3&query=${city}`)
    .then(response => response.json())
    .then((response) => {
        const{
            current: {temperature},
            location: {country, name, lat, lon},
        } = response;
        map.set(name, [name, country, temperature, lat, lon])
       renderTableRow();
       localStorage.setItem(response.location.name, JSON.stringify(response));
    });    
}


