let input = document.querySelector('.input');
let form = document.getElementById('form');
let buttonClear = document.getElementById('clear');
let buttonMyWeather = document.getElementById('myWeather');



import {getWeather} from './src/api/getWeather'
import {getMyLocation, getWeatherFromStorage, map, renderTableRow} from './src/servises'

form.addEventListener('submit', function(event){
    event.preventDefault();
    getWeather(input.value);
})
// =========================== My Weather=================================
buttonMyWeather.addEventListener('click', () => {
    getMyLocation()
});
// ============================== Local Storage =============================
window.addEventListener('load', () => {
     getWeatherFromStorage();
});

// =============================== Button "Clear All"==========================
buttonClear.addEventListener('click', () => {
    map.clear();
    renderTableRow();
    localStorage.clear();
    dataArray = [];
})
