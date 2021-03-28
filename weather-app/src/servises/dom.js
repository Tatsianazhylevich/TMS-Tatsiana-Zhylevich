import { map } from './map'
export let tableBody = document.getElementById('tbody');
export let cityMap = document.querySelector('.cityMap');
export function renderTableRow() {

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