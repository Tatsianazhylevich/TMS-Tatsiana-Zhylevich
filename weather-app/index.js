let input = document.querySelector('.input');
let form = document.getElementById('form');
let buttonClear = document.getElementById('clear');

let tableBody = document.getElementById('tbody');

const map = new Map();

function renderTableRow() {

    let tBody = '';

    map.forEach((value, key) => {
        const[city, country, temp] = value;
        tBody += `
        <tr>
            <td>${city}</td>
            <td>${country}</td>
            <td>${temp}</td>
            <td>${temp}</td>
        </tr>
        `
    })
    tableBody.innerHTML = tBody;
}

function getWeather(city){
    return fetch(`http://api.weatherstack.com/current?access_key=8a2380626129e4b4b0b74c8703d3d9c3&query=${city}`)
    .then(response => response.json())
}

form.addEventListener('submit', function(event){
    event.preventDefault();

    getWeather(input.value).then((response) => {
        const{
            current: {temperature},
            location: {country, name},

        } = response;
        map.set(name, [name, country, temperature])
        renderTableRow();
    })
})

buttonClear.addEventListener('click', () => {
    map.clear();
    renderTableRow();
})