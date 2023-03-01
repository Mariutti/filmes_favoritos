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

const btnCadastrar = document.querySelector("#btnCadastrar");
btnCadastrar.addEventListener("click", cadastrar);

function cadastrar(){
    event.preventDefault();
    let movieTitle = document.querySelector("#title");
    let score = document.querySelector("#score").value;
    let movieLength = document.querySelector("#movieLength").value;
    if(locadora.map((movie)=>(movie.title)).includes(movieTitle.value)){
        console.log("repetido");
        movieTitle.value = '';
        score = '';
        movieLength = '';
        console.log(locadora);
    }else{
        console.log("novo");
        const movie = new Movie(movieTitle.value, score, movieLength);
        console.log(movie);
        locadora.push(movie);
        console.log(locadora);
        movieTitle.value = '';
        score = '';
        movieLength = '';
    }

}


