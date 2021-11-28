const alerta = document.querySelector("#alerta");
const tabaleaUsuarios = document.querySelector("#tabela-usuarios");
const botaoCarregar = document.querySelector("#botao-carregar");

const DADOS_USUARIOS = [
  {
    id: 1,
    name: "Amanda",
    email: "amanda@lovemail.com",
    company: { name: "Lets Code" },
  },
  {
    id: 2,
    name: "Igor",
    email: "igor@bol.com",
    company: { name: "Santander" },
  },
  {
    id: 3,
    name: "Mar cos",
    email: "marcos1234@outlook.com",
    company: { name: "Microsoft" },
  },
  {
    id: 4,
    name: "Lucas",
    email: "lucasflores@hotmail.com",
    company: { name: "Google" },
  },
];

const buscarUsuarioNoBancoDados = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!DADOS_USUARIOS) {
        reject("Não existem usuários");
      }
      resolve(DADOS_USUARIOS);
    }, 5000);
  });
};

const novalinha = ({ id, name, email, company }) => (
  <tr id="${id}">
    <td>${name}</td>
    <td>${email}</td>
    <td>${company}</td>
  </tr>
);

async function consultaUsuariosAsync() {
  try {
    alerta.textContent = "Carregando...";
    return await buscarUsuariosNoBancoDeDados((segundos = 5));
  } catch (err) {
    console.log(err);
  }
}
consultaUsuariosAsync()
  .then((resp) => console.log(resp))
  .catch((err) => console.log(err));

const buscarUsuarioNoBancoDadosFetchApi = () => {
  return fetch("https://swapi.dev/api/people/")
    .then((resposta) => resposta.json())
    .catch((erro) => erro);
};
