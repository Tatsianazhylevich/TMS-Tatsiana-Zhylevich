import {getMyWeather} from '../api'

export function getMyLocation() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(getMyWeather);
    }else{
        alert('Ваш браузер не поддерживает Geolocation API'); 
    }
}