function attachEvents() {
    const baseUrl = `http://localhost:3030/jsonstore/forecaster/locations`;
    const userLocationElement = document.getElementById('location');
    const submitBtn = document.getElementById('submit');
    const forecastElement = document.getElementById('forecast');
    const current = document.getElementById('current');
    const upcoming = document.getElementById('upcoming');
    submitBtn.addEventListener('click', getLocation);
    const symbols = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂'
    }
    const deg = '°';
    let currObj = {};

    function getLocation() {
        current.innerHTML = '';
        upcoming.innerHTML = '';
        const forecastDiv = creator('div', 'className', 'forecast', '');
        forecastElement.style.display = 'block';

        fetch(`${baseUrl}`)
            .then((res) => res.json())
            .then((data) => {
                const found = data.find(el => el.name === userLocationElement.value);
                currObj = Object.assign(found);
                today();
                upcomingDays();
            })
            .catch((error) => {
                forecastDiv.innerText = 'Error';
                current.appendChild(forecastDiv);
                console.log(error);
            });

        function today() {
            fetch(`http://localhost:3030/jsonstore/forecaster/today/${currObj.code}`)
            .then((res) => res.json())
            .then((currentData) => {
                let cond = currentData.forecast.condition;
                let low = currentData.forecast.low;
                let high = currentData.forecast.high;
                const label = creator('div', 'className', 'label', 'Current conditions');
                current.appendChild(label);
                forecastDiv.appendChild(creator('span', 'className', 'condition symbol', `${symbols[cond]}`));
                const span = creator('span', 'className', 'conditiion', '');
                span.appendChild(creator('span', 'className', 'forecast-data', `${currentData.name}`));
                span.appendChild(creator('span', 'className', 'forecast-data', `${low}${deg}/${high}${deg}`));
                span.appendChild(creator('span', 'className', 'forecast-data', `${cond}`));
                forecastDiv.appendChild(span);
                current.appendChild(forecastDiv);
            })
            .catch(error => console.log(error));
        }

        function upcomingDays() {
            fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${currObj.code}`)
            .then((res) => res.json())
            .then((threeDays) => {
                const forecastInfoDiv = creator('div', 'className', 'forecast-info', '');
                const label = creator('div', 'className', 'label', 'Three-day forecast');
                upcoming.appendChild(label);
                threeDays.forecast.forEach(day => {
                    let low = day.low;
                    let high = day.high;
                    let cond = day.condition;
                    const span = creator('span', 'className', 'upcoming', '');
                    span.appendChild(creator('span', 'className', 'symbol', `${symbols[cond]}`));
                    span.appendChild(creator('span', 'className', 'forecast-data', `${low}${deg}/${high}${deg}`));
                    span.appendChild(creator('span', 'className', 'forecast-data', `${cond}`));
                    forecastInfoDiv.appendChild(span);
                });
                upcoming.appendChild(forecastInfoDiv);
            })
            .catch(error => console.log(error));
        }
    }
    function creator(type, attribute, attrValue, text) {
        const element = document.createElement(type);
        attribute ? element[attribute] = attrValue : null;
        text ? element.innerText = text : null;
        return element;
    }

}

attachEvents();
