// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map((movie) => movie.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  const result = movies.filter((movie) => movie.director === director);
  console.log('EXERCISE 2 ->', result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  const moviesFilteredByDirector = movies.filter(
    (movie) => movie.director === director
  );
  const totalScore = moviesFilteredByDirector.reduce(
    (total, movie) => total + movie.score,
    0
  );
  const averageScore = totalScore / moviesFilteredByDirector.length;
  const roundAverageScore = parseFloat(averageScore.toFixed(2));

  console.log('EXERCISE 3 ->', roundAverageScore);
  return roundAverageScore;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(movies) {
  const allTitles = movies.filter((movie) => movie.title);
  const moviesOrderedAlphabetically = allTitles.sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  const first20Movies = moviesOrderedAlphabetically
    .slice(0, 20)
    .map((movie) => movie.title);

  console.log('EXERCISE 4 ->', first20Movies);
  return first20Movies;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  const moviesFilteredByYearAscending = movies
    .filter((movie) => movie.year)
    .sort((a, b) => {
      if (a.year === b.year) {
        return a.title.localeCompare(b.title);
      }
      return a.year - b.year;
    });
  console.log('EXERCISE 5 ->', moviesFilteredByYearAscending);
  return moviesFilteredByYearAscending;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genreFilter) {
  const moviesByGenre = movies.filter(
    (movie) => movie.genre && movie.genre.includes(genreFilter)
  );
  const totalScoreByGenre = moviesByGenre.reduce(
    (total, movie) => total + movie.score,
    0
  );
  const averageScoreByGenre = totalScoreByGenre / moviesByGenre.length;
  const roundScoreByGenre = parseFloat(averageScoreByGenre.toFixed(1));
  console.log('EXERCISE 6 ->', roundScoreByGenre);
  return roundScoreByGenre;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  const moviesMin = movies.map((movie) => {
    const durationArray = movie.duration.split(' ');

    const durationArrayMap = durationArray.map((element) => {
      if (element.includes('h')) {
        element = parseInt(element.replace('h', '')) * 60;
        return element;
      }
      return element
      .trim()
      .replace('min', '');
    });

    const sum = durationArrayMap.reduce(
      (total, element) => total + (element && parseInt(element)),
      0
    );

    const movieMin = { ...movie, duration: sum };
    // Opcion deep copy
    // const movieMin = JSON.parse(JSON.stringify(movie));
    // movieMin.duration = sum;
    return movieMin;
  });
  console.log("EXERCISE 7 ->", moviesMin);
  return moviesMin;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  const movieByYearDescending = movies.filter(movie => movie.year === year)
  .sort((a,b) => b.score - a.score);
  console.log("movieByYearDescending", movieByYearDescending)
  const bestMovie = movieByYearDescending.length > 0 ? [movieByYearDescending[0]] : [];
  console.log("EXERCISE 8 ->", bestMovie);
  return bestMovie;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
