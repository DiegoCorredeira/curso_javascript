const elements = [
  {
    tag: "p",
    texto: "Oi",
  },
  {
    tag: "div",
    texto: "Como cê tá?",
  },

  {
    tag: "section",
    texto: "Eu...",
  },

  {
    tag: "footer",
    texto: "Quero saber a cor da sua calcinha",
  },
];

// Selecionando o elemento com a classe container
const container = document.querySelector(".container");
// Criando uma div
const div = document.createElement("div");

for (let i = 0; i < elements.length; i++) {
  let { tag, texto } = elements[i];
  let tagCriada = document.createElement(tag);
  tagCriada.innerHTML = texto;
  div.appendChild(tagCriada);


}
container.appendChild(div);