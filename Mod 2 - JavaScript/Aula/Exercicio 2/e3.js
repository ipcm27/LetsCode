const posts = [
  {
    id: 0,
    title: "Programação Funcional",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "Gabriel Millitelo",
  },
  {
    id: 1,
    title: "Funções de Alta Ordem",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "Lucas Maia",
  },
  {
    id: 2,
    title: "Funções de Alta Ordem de Arrays",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "Felipe Cabral",
  },
  {
    id: 3,
    title: "Função map()",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "Walisson Silva",
  },
];

const callTitleOnly = (property) => property.title;
const callContenteOnly = (property) => property.content;

const previewContent = (str) => str.split(" ", 300).join(" ");

const titleUpperCase = posts
  .map(callTitleOnly)
  .map((titles) => titles.toUpperCase());
const previewPosts = posts.map(callContenteOnly).map(previewContent);

console.log(titleUpperCase);
console.log(previewPosts);

//DUVIDAS
// questão 3
// Eu tinha a seguinte função  que eu iria usar como callback no map principal
// const makeUpperCase = (arr) => arr.map((x) => x.ToUpperCase);
// se eu colocasse a função "makeUpperCase" como callback no map da função principal, dessa forma:
// const titleUpperCase2 = posts.map(callTitleOnly).map(makeUpperCase);
// ele dava o seguinte erro  "arr.map is not a function”.

// Entretanto quando eu coloquei a lógica da ”make Uppercase” direto na  “titleUppercase”da seguinte forma:
// const titleUpperCase = posts.map(callTitleOnly).map((titles) => titles.toUpperCase());

//  Funcionou direitinho. Por que ?

// reposta que eu tive enquanto escrevia a dúvida:
// o makeUpper case recebi um arr e retornava um arr.map, quando na verdade deveria receber um x e retorna um x.toUppercase.
