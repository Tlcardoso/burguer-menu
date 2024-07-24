import { createSelector } from 'reselect';
import { RootState } from '../../store/store';

const selectSelf = (state: RootState) => state;
const basketData = createSelector(selectSelf, (state) => state);

export {
  basketData,
};
