import { HomePage as HomePageComponent } from './home-page';
import { HomePageContainer } from '../home-page-container/home-page-container';
import { loadMovies } from '../home-page-container/actions';

export const HomePage = HomePageContainer(HomePageComponent);
HomePage.loadData = (store) => {
  return store.dispatch(loadMovies());
};
