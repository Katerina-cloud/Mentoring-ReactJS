import { filterGenreSelector } from '../';

describe('filterGenreSelector', () => {
  it('filterGenreSelector unit test', () => {
    const filterGenreState = 'All';
    const selected = filterGenreSelector.resultFunc(filterGenreState);

    expect(selected).toStrictEqual(filterGenreState);
  });
});
