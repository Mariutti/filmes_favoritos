// document.querySelector('form').addEventListener('submit', (event)=> event.preventDefault())

class Movie {
  title;
  score;
  movieLength;
  constructor(title, score, movieLength) {
    this.title = title;
    this.score = score;
    this.movieLength = movieLength;
    this.favorite = false;
    this.watched = false;
  }
  teste() {
    return "teste executado";
  }
}

const locadora = [
  {
    title: "Titulo",
    score: "5",
    movieLength: "02:37",
    favorite: false,
    watched: false,
  },
  {
    title: "Hobbit",
    score: "5",
    movieLength: "02:37",
    favorite: false,
    watched: false,
  },
  {
    title: "Outro",
    score: "5",
    movieLength: "02:37",
    favorite: false,
    watched: false,
  },
];

listarFilmes(locadora);
const btnCadastrar = document.querySelector("#btnCadastrar");
btnCadastrar.addEventListener("click", cadastrar);

function cadastrar() {
  event.preventDefault();
  let movieTitle = document.querySelector("#title");
  let score = document.querySelector("#score").value;
  let movieLength = document.querySelector("#movieLength").value;
  if (
    locadora
      .map((movie) => movie.title.toLowerCase())
      .includes(movieTitle.value.toLowerCase())
  ) {
    console.log("repetido");
    alert("Filme já cadastrado");
    movieTitle.value = "";
    score = "";
    movieLength = "";
    console.log(locadora);
  } else {
    console.log("novo");
    const movie = new Movie(movieTitle.value, score, movieLength);
    console.log(movie);
    locadora.push(movie);
    console.log(locadora);
    movieTitle.value = "";
    score = "";
    movieLength = "";
  }
  listarFilmes(locadora);
}

function listarFilmes(array) {
  let i = 1;
  const cardsUl = document.querySelector(".cardsUl");
  cardsUl.innerHTML = null;

  array.forEach((item) => {
    console.log(`Filme ${i}`);
    const liCard = document.createElement("li");
    liCard.className = "liCard";
    const ulCardProp = document.createElement("ul");
    ulCardProp.className = "ulCardProp";

    item.id = i;
    for (const value in item) {
      if (value === "title" || value === "score" || value === "movieLength") {
        console.log(value + ": " + item[value]);
        const li = document.createElement("li");
        li.innerHTML = `${value}: ${item[value]}`;

        li.className = "liProp";
        ulCardProp.appendChild(li);
      }
    }
    console.log("-------------------");
    i++;
    liCard.appendChild(ulCardProp);
    cardsUl.appendChild(liCard);
  });
}

const searchInput = document.querySelector("#searchInput");
searchInput.addEventListener("search", buscar);

function buscar() {
  let finder = searchInput.value;

  console.log(finder);
  let findArray = [];
  if ((finder = "")) {
    findArray = locadora;
  }
  // const findArray = ()=>locadora.map(movie => movie.title.toLowerCase()).filter((title)=> title.includes(finder.toLowerCase()))

  console.log(findArray);
  const cardsUl = document.querySelector(".cardsUl");
  cardsUl.innerHTML = null;
  listarFilmes(findArray);
}
window.addEventListener("onload", buscar);
