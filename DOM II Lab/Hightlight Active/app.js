function focused() {
    let fieldsElements = document.querySelectorAll('input[type = "text"]');
    for(let el of fieldsElements) {
        el.addEventListener('focus', (e) => {
            e.target.parentNode.className = 'focused';
        });
        el.addEventListener('blur', (e) => {
            e.target.parentNode.className = 'blur';
        })
    }
}
