import { PayloadAction } from '@reduxjs/toolkit';
import { storage } from '../../store/persist';
import { ViewMenuOutput } from '../../services/VenueServices/types';

type MenuDataType = ViewMenuOutput

type StateType = {
  data: MenuDataType | null;
};

const setMenuData = (state: StateType, action: PayloadAction<{ data: MenuDataType }>) => {
  const { data } = action.payload;
  state.data = data;

  storage.setItem('venue', JSON.stringify(data));
};

export {
  setMenuData,
};
