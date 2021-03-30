import { FILM } from '../../const/routes';

export const formatGenre = (genres) => genres?.join(', ');

export const formatYear = (year) => year.split('-')[0];

export const buildMovieDetailsLink = (id) => `${FILM}/${id}`;
