function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "roses are red..",
    autoStart: true,
    delay: 80,
    cursor: "",
  });
}

let poemElement = document.querySelector("#poem-generator");
poemElement.addEventListener("submit", generatePoem);
