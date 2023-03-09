function extractText() {
    let itemElements = document.getElementById('items');
    let areaElement = document.getElementById('result');
    areaElement.textContent = itemElements.textContent;
}
