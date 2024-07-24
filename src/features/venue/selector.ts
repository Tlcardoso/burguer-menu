import { createSelector } from 'reselect';
import { RootState } from '../../store/store';

const selectSelf = (state: RootState) => state;
const venueData = createSelector(selectSelf, (state) => state);

export {
  venueData,
};
