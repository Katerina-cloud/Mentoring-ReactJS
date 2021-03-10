import { isDefaultFiltering } from '../movie';
import { SORTINGS } from '../../const/sortings';

describe('movie service', () => {
  it('movie service isDefaultFiltering', () => {
    expect(isDefaultFiltering(SORTINGS.ALL)).toBe(true);
  });
});
