let input = document.querySelector('.input');
let form = document.getElementById('form');
let buttonClear = document.getElementById('clear');
let buttonMyWeather = document.getElementById('myWeather');
let tableBody = document.getElementById('tbody');
let cityMap = document.querySelector('.cityMap');

const map = new Map();

function renderTableRow() {

    let tBody = '';
    let cMap = '';
    map.forEach((value) => {
        const[city, country, temp, lat, lon] = value;
        tBody += `
        <tr>
            <td>${city}</td>
            <td>${country}</td>
            <td>${temp}</td>
            <td>${temp}</td>
        </tr>
        `
        cMap += `<img src='https://maps.locationiq.com/v2/staticmap?key=pk.c6c8e0f26d559c4194d567e972e29b74&center=${lat},${lon}&zoom=12&size=400x400&markers=${lat},${lon}|icon:large-red-cutout'></img>`
    })
    tableBody.innerHTML = tBody;
    cityMap.innerHTML = cMap;
}

function getWeather(city){
    return fetch(`http://api.weatherstack.com/current?access_key=8a2380626129e4b4b0b74c8703d3d9c3&query=${city}`)
    .then(response => response.json())
    .then((response) => {
        const{
            current: {temperature},
            location: {country, name, lat, lon},
        } = response;
        map.set(name, [name, country, temperature, lat, lon])
       renderTableRow();
    })  
}

form.addEventListener('submit', function(event){
    event.preventDefault();
    getWeather(input.value);
})

function getMyWeather({coords: {latitude: lat, longitude: lon}}){
    console.log(`${lat}, ${lon}`)
    fetch(`https://eu1.locationiq.com/v1/reverse.php?key=pk.80f74496452169d08d8ab400676ea8d9&lat=${lat}&lon=${lon}&format=json&accept-language=en`)
    .then(response => response.json())
    .then((response) => {
        getWeather(response.address.town)
    })
}

function getMyLocation() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(getMyWeather);
    }else{
        alert('Ваш браузер не поддерживает Geolocation API'); 
    }
}

buttonMyWeather.addEventListener('click', () => {
    getMyLocation()
   
});

buttonClear.addEventListener('click', () => {
    map.clear();
    renderTableRow();
})
