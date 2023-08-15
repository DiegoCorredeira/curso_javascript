const button = document.getElementById("aumentando");
const cont = document.getElementById("cont");

let contValue = 0;

button.addEventListener("click", () => {
  contValue++;
  cont.innerHTML = contValue;
});
