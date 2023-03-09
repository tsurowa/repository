function addItem() {
    let inputItemElement = document.getElementById('newItemText');
    let itemsElements = document.getElementById('items');
    let newLiElement = document.createElement('li');
    newLiElement.textContent = inputItemElement.value;
    itemsElements.appendChild(newLiElement);
}
