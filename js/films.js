const url = 'https://kinopoiskapiunofficial.tech/api/v2.1';
const filmsElement = document.getElementById('films');

const films = [
  568413,
  530,
  1045172,
  1005878,
  535341
];


const getFilmById = function (id) {
  return new Promise(function(resolve, reject){
        fetch(`${url}/films/${id}`, {
          headers: {
            "X-API-KEY": "5f2df07b-6b31-442c-a7f0-547a878cae6b"
          }
        }).then(response => response.json()).then(resolve)
  })
}

const parseFilm = function (data) {
  data = data.data;
  let countries = '';
  let genres = '';
  console.log(data)
  data.genres.forEach(function(item){
     genres += `${item.genre} `
  })
  data.countries.forEach(function(item){
     countries += `${item.country} `
  })
  return {
    name: data.nameRu,
    country: countries,
    genre: genres,
    year: data.year,
    description: data.description,
    img: data.posterUrl,
    link: data.webUrl
  }
}
const generateFilmItem = function (name, country, genre, year, description, img, link){
  return ` <div>
            <h2>Название: <b>${name}<b/></h2>
            <h3>Страна: <b>${country}<b/></h3>
            <h3>Жанры: <b>${genre}<b/></h3>
            <h3>Год: <b>${year}<b/></h3>
            <p>Описание: <b>${description}<b/></p>
            <img src="${img}"></img>
            <div> <a href="${link}">Ссылка на кинопоиске</a></div>
        </div>`
}
let element, prepareFilm;
films.forEach(function(item){
  let film = getFilmById(item);
  film.then(result => {
        prepareFilm = parseFilm(result);
        element = generateFilmItem(prepareFilm.name, prepareFilm.country, prepareFilm.genre, prepareFilm.year,prepareFilm.description, prepareFilm.img, prepareFilm.link);
        filmsElement.insertAdjacentHTML('beforeEnd', element) 
  })
})
