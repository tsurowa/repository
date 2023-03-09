async function getInfo() {
    
    const inputElement = document.getElementById('stopId').value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${inputElement}`;
    const submitBtn = document.getElementById('submit');
    const stopName = document.getElementById('stopName');
    const buses = document.getElementById('buses');
    
    try {
        buses.replaceChildren();
        const res = await fetch(url);
        const data = await res.json();
        stopName.textContent = data.name;
        Object.entries(data.buses).forEach(b => {
            const liElement = document.createElement('li');
            liElement.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;
            buses.appendChild(liElement);
        })
    } catch (error) {
        stopName.textContent = 'Error';
    }
}
