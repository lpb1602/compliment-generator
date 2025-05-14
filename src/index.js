function generateCompliment(event) {
  event.preventDefault();
  new Typewriter("#compliment", {
    strings: "The output will appear here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let complimentFormElement = document.querySelector("#compliment-generator");
complimentFormElement.addEventListener("submit", generateCompliment);
