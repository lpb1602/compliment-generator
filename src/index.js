function displayCompliment(response) {
  new Typewriter("#compliment", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generateCompliment(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let key = "275d2e1f3c946100ob7479e0d25c3atd";
  let prompt = `Generate a compliment based on the user mood ${instructionsInput.value} `;
  let context =
    "You are a friendly AI assistant. Your mission is to generate a short compliment based on the users mood. Truncate text if needed. Sign your compliment with '- SheCodes AI' in a <strong> element after a <br> element";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  let complimentElement = document.querySelector("#compliment");
  complimentElement.classList.remove("hidden");
  complimentElement.innerHTML = "Generating your compliment... ✨";

  axios.get(apiURL).then(displayCompliment);
}

let complimentFormElement = document.querySelector("#compliment-generator");
complimentFormElement.addEventListener("submit", generateCompliment);
