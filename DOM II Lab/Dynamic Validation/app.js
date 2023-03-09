function validate() {
    let inputEmailElement = document.getElementById('email');
    let regex = /[a-z]+@[a-z]+\.[a-z]+/g;
    inputEmailElement.addEventListener('change', (e) => {
        if(inputEmailElement.value.match(regex)) {
            e.target.classList.remove('error');
        } else {
            e.target.classList.add('error');
        }
    })
}
