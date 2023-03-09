function solve() {
  let inputElement = document.getElementById('input');
  let text = inputElement.value.split(".").filter(s => s !== "");
  let outputElement = document.getElementById('output');

  while(text.length > 0) {
    let newText = text.splice(0, 3).join('. ') + '.';
    let paragraph = document.createElement('p');
    paragraph.textContent = newText;
    outputElement.appendChild(paragraph);
  }
}
