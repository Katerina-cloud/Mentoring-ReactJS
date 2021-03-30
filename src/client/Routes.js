import { ErrorPage, MovieDetailsPage, HomePage } from './pages/';

export default [
  {
    path: '/film/:searchId',
    component: MovieDetailsPage,
    loadData: MovieDetailsPage.loadData,
  },
  {
    path: '/search/:criteria',
    component: HomePage,
    loadData: HomePage.loadData,
  },
  {
    path: '/',
    component: HomePage,
    exact: true,
    loadData: HomePage.loadData,
  },
  {
    path: '*',
    component: ErrorPage,
  },
];
