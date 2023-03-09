function calc() {
    let startElement = document.getElementById('num1');
    let finalElement = document.getElementById('num2');
    let sumElement = document.getElementById('sum');
    sumElement.value = Number(startElement.value) + Number(finalElement.value);
}
