import { SORTINGS } from '../const/sortings';

export const isDefaultFiltering = (genre) => genre === SORTINGS.ALL;

const checkIsIncludingSubstring = (movieTitle, searchTitle) => {
  return movieTitle.toLowerCase().includes(searchTitle.toLowerCase());
};

//TODO: refactor the func
export const filterMovies = (movies, { searchTitle, filterGenre }) => {
  // if (isDefaultFiltering(filterGenre) || !searchTitle) {
  //   return movies;
  // }

  return movies.filter(({ genres, title }) => {
    let isIncludingGenre = true;
    let isIncludingSubstring = true;

    if (!isDefaultFiltering(filterGenre)) {
      isIncludingGenre = genres.includes(filterGenre);
    }

    if (searchTitle) {
      isIncludingSubstring = checkIsIncludingSubstring(title, searchTitle);
    }

    return isIncludingSubstring && isIncludingGenre;
  });
};

export const sortMovies = (movies, sortParameter) => {
  return movies.sort((firstMovie, secondMovie) => {
    if (firstMovie[sortParameter] < secondMovie[sortParameter]) {
      return 1;
    }
    if (firstMovie[sortParameter] > secondMovie[sortParameter]) {
      return -1;
    }
    return 0;
  });
};
