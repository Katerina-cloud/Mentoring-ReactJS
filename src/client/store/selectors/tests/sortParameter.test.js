import { sortParameterSelector } from '../';
import { SORTINGS } from '../../../const/sortings';

describe('sortParameterSelector', () => {
  it('sortParameterSelector unit test', () => {
    const sortParameterState = SORTINGS.ALL;
    const selected = sortParameterSelector.resultFunc(sortParameterState);

    expect(selected).toStrictEqual(sortParameterState);
  });
});
