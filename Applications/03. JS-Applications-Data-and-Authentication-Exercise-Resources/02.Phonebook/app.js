function attachEvents() {
    const url = `http://localhost:3030/jsonstore/phonebook`;
    const ul = document.getElementById('phonebook');
    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');
    const person = document.getElementById('person');
    const phone = document.getElementById('phone');
    loadBtn.addEventListener('click', load);
    createBtn.addEventListener('click', create);

    async function load() {
        ul.innerHTML = '';
        const res = await fetch(url);
        const data = await res.json();
        Object.values(data).forEach(x=> {
            const {person, phone, _id} = x;
            const li = createElement('li', `${person}: ${phone}`, ul);
            li.setAttribute('id', _id);
            const deleteBtn = createElement('button', 'Delete', li);
            deleteBtn.setAttribute('id', 'deleteBtn');
            deleteBtn.addEventListener('click', onClickDelete);
        });
    }

    function createElement (type, text, appender) {
        const result = document.createElement(type);
        result.textContent = text;
        appender.appendChild(result);
        return result;
    }

    async function create() {
        if(person.value !== '' && phone.value !== '') {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({person: person.value, phone:phone.value})
            });
            ul.innerHTML = '';
            loadBtn.click();
            person.value = '';
            phone.value = '';
        }
    }

    async function onClickDelete(ev) {
        const id = ev.target.parentNode.id;
        ev.target.parentNode.remove();
        const deleteResponse = await fetch (`${url}/${id}`, {
            method: 'DELETE'
        });
    }
}

attachEvents();