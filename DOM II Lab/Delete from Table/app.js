function deleteByEmail() {
    let trDataElements = document.querySelectorAll('tr td:nth-of-type(2)');
    let inputFieldElement = document.querySelector('input[name = "email"]');
    let resultElement = document.getElementById('result');
    for (let row of trDataElements) {
        if (row.textContent.includes(inputFieldElement.value)) {
            row.parentNode.remove();
            resultElement.textContent = 'Deleted.';
        } else {
            resultElement.textContent = 'Not found.'
        }
    }
    inputFieldElement.value = '';
}
