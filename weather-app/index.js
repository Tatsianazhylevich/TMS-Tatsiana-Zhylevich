let input = document.querySelector('.input');
let form = document.getElementById('form');
let buttonClear = document.getElementById('clear');

let tableBody = document.getElementById('tbody');
let cityMap = document.querySelector('.cityMap');

const map = new Map();

function renderTableRow() {

    let tBody = '';
    let cMap = '';
    map.forEach((value, key) => {
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
    .then(response => response.json());
}

form.addEventListener('submit', function(event){
    event.preventDefault();

    getWeather(input.value)
    .then((response) => {
        console.log(response);
        const{
            current: {temperature},
            location: {country, name, lat, lon},

        } = response;
        map.set(name, [name, country, temperature, lat, lon])
       
       renderTableRow();
    })  
})


buttonClear.addEventListener('click', () => {
    map.clear();
    renderTableRow();
})
