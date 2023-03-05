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
  } else {
    console.log("novo");
    const movie = new Movie(movieTitle.value, score, movieLength);
    movieTitle.value = "";
    score = "";
    movieLength = "";
    locadora.push(movie);
  }
  listarFilmes(locadora);
}

function listarFilmes(array) {
  const cardsUl = document.querySelector(".cardsUl");
  cardsUl.innerHTML = "";

  array.forEach((item) => {
    const liCard = document.createElement("li");
    liCard.className = "liCard";
    const ulCardProp = document.createElement("ul");
    ulCardProp.className = "ulCardProp";
    const heartImg = document.createElement("img");
    heartImg.classList = "heartImg heartImgOpac";
    heartImg.src =
      "https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/heart-icon.png";

    // item.id = i;
    for (const value in item) {
      if (value === "title" || value === "score" || value === "movieLength") {
        const li = document.createElement("li");
        li.innerHTML = `${value}: ${item[value]}`;

        li.className = "liProp";
        if (value === "title") {
          li.classList.add("title");
        } else if (value === "score") {
          li.classList.add("score");
        } else if (value === "movieLength") {
          li.classList.add("movieLength");
        }
        ulCardProp.appendChild(li);
      }
      ulCardProp.appendChild(heartImg);
      liCard.appendChild(ulCardProp);
      cardsUl.appendChild(liCard);
    }
  });
}

const searchInput = document.querySelector("#searchInput");
const searchSection = document.querySelector(".searchSection");
const text = document.createElement("p");
searchSection.appendChild(text);
searchInput.addEventListener("keyup", seekMovie);
let finderArray = [];

function seekMovie(e) {
  e.preventDefault();
  const searchTextValue = e.target.value;
  text.innerHTML = searchTextValue;

  if (!searchTextValue) {
    finderArray = locadora.map((item) => item);
  } else {
    finderArray = [];
    finderArray = locadora.map((movie) => {
      if (movie.title.toLowerCase().includes(searchTextValue.toLowerCase())) {
        return movie;
      }
    });
  }
  const advertiseH2 = document.createElement("h2");
  advertiseH2.className = "advertiseH2";
  listarFilmes(finderArray);
  checarFinder(finderArray);
}

function heartToggling() {
  const heartImg = document.querySelectorAll(".heartImg");
  const heartToggle = heartImg.forEach((img) => {
    
    img.addEventListener("click", (e) => {
      "strict mode";
      e.preventDefault()
      const favorite = ()=>{
        let tituloDaImg = e.target.parentNode.firstChild.innerText.slice(7)
        locadora.forEach((movie)=>{
          if(movie.title === tituloDaImg){
            if(movie.favorite == false){
              movie.favorite = true
            }else{
              movie.favorite = false
            }
          }
        })
        finderArray.forEach((movie)=>{
          if(movie.title === tituloDaImg){
            if(movie.favorite == false){
              movie.favorite = true
            }else{
              movie.favorite = false
            }
          }
        })
      }
      favorite()
      img.classList.toggle("heartImgOpac");
    });
    console.log(finderArray)
  });
 
}
heartToggling();

const checarFinder = (vetor) => {
  const advertiseH2 = document.createElement("h2");
  advertiseH2.className = "advertiseH2";
  if (vetor.every((item) => item == undefined)) {
    console.log("teste");
    const cardsSection = document.querySelector(".cardsSection");
    document.querySelector(".cardsUl").style.display = "none";

    advertiseH2.innerText =
      "Não foi encontrado nenhum filme com esse critério de busca.";
    cardsSection.appendChild(advertiseH2);
  } else {
    document.querySelector(".cardsUl").style.display = "flex";
    const advertiseH2 = document.querySelector(".advertiseH2");
    advertiseH2.remove();
  }
  listarFilmes(vetor);
};
