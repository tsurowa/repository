function solve() {
  let inputElement = document.getElementById("text").value;
  let caseElement = document.getElementById("naming-convention").value;
  let resultElement = document.getElementById("result");
  let result = "";
  if (caseElement === "Camel Case") {
    for (let i = 0; i < inputElement.length; i++) {
      if (inputElement[i] === " ") {
        result += inputElement[i + 1].toUpperCase();
        i++;
      } else {
        result += inputElement[i].toLowerCase();
      }
    }
  } else if (caseElement === "Pascal Case") {
    result += inputElement[0].toUpperCase();
    for (let i = 1; i < inputElement.length; i++) {
      if (inputElement[i] === " ") {
        result += inputElement[i + 1].toUpperCase();
        i++;
      } else {
        result += inputElement[i].toLowerCase();
      }
    }
  } else {
    result = 'Error!'
  }
  resultElement.textContent = result;
}
