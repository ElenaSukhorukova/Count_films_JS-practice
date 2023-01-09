const numberOfFilms = +prompt('How much have you alredy watched films?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const nameOfFilm1 = prompt('Name one of last films which you watched', ''),
      rateOfFilm1 = prompt('What rate can you give it?', ''),
      nameOfFilm2 = prompt('Name one of last films which you watched', ''),
      rateOfFilm2 = prompt('What rate can you give it?', '');


personalMovieDB.movies[nameOfFilm1] = rateOfFilm1;
personalMovieDB.movies[nameOfFilm2] = rateOfFilm2;

console.log(personalMovieDB);

