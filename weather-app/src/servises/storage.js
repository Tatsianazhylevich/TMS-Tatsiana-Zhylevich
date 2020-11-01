import {getWeather} from '../api'

export function getWeatherFromStorage(){
    let cities = Object.keys(localStorage);
    for(let city of cities) {
		getWeather(city)
		.then(result => {
			localStorage.setItem(key, JSON.stringify(result));
		});
	}
}