import { createSelector } from 'reselect';
import { RootState } from '../../store/store';

const selectSelf = (state: RootState) => state;
const menuData = createSelector(selectSelf, (state) => state);

export {
  menuData,
};
