import React from 'react';
import { HomePage, MovieDetailsPage } from './pages/';

export class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMovieModalOpen: false,
      isAddMovieModalOpen: false,
      isDottedIconOpen: false,
    };
  }
  changeColor = () => {
    this.setState({ color: 'blue' });
  };
  render() {
    return (
      <>
        <HomePage />
        <MovieDetailsPage movieId="2" />
      </>
    );
  }
}
