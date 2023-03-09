function addItem() {
  let inputItemElement = document.getElementById("newItemText");
  let itemsElements = document.getElementById("items");
  let newLiElement = document.createElement("li");
  newLiElement.textContent = inputItemElement.value;
  inputItemElement.value = '';
  let deleteLinkElement = document.createElement('a');
  deleteLinkElement.href = '#';
  deleteLinkElement.textContent = '[Delete]';
  deleteLinkElement.addEventListener('click', (e) => {
    e.currentTarget.parentNode.remove();
  })
  newLiElement.appendChild(deleteLinkElement);
  itemsElements.appendChild(newLiElement);
}
