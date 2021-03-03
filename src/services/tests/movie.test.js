import { isDefaultFiltering } from '../movie';

describe('movie service', () => {
  // it('isDefaultFiltering true', () => {
  //   const tree = render(<Card />).toJSON();
  //   expect(tree).toMatchSnapshot();
  it('movie service isDefaultFiltering', () => {
    expect(isDefaultFiltering('All')).toBe(true);
  });
});
