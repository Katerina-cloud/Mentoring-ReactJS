export const movieData = [
  {
    id: '1',
    year: '2003',
    title: 'Kill Bill',
    category: 'Drama',
    raiting: '4.5',
  },
  {
    id: '2',
    year: '1994',
    duration: '154 min',
    title: 'Kill Bill2',
    category: 'Drama',
    raiting: '4.5',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur',
    overview: 'Oscar winning movie',
  },
  {
    id: '3',
    year: '2003',
    title: 'Kill Bill',
    category: 'Drama',
    raiting: '4.5',
  },
  {
    id: '4',
    year: '2003',
    title: 'Kill Bill',
    category: 'Drama',
    raiting: '4.5',
  },
  {
    id: '5',
    year: '2003',
    title: 'Kill Bill',
    category: 'Drama',
    raiting: '4.5',
  },
  {
    id: '6',
    year: '2003',
    title: 'Kill Bill',
    category: 'Drama',
    raiting: '4.5',
  },
];

export const getMovieById = (id) => {
  return movieData.find((film) => film.id === id);
};
