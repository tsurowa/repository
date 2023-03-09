function toggle() {
  let textElement = document.querySelector("#extra");
  let buttonElement = document.querySelector(".button");

  if (buttonElement.textContent === "More") {
    buttonElement.textContent = "Less";
    textElement.style.display = "block";
  } else {
    buttonElement.textContent = "More";
    textElement.style.display = "none";
  }
  console.log(buttonElement);
}
