/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction } from '@reduxjs/toolkit';
import { storage } from '../../store/persist';

const setVenueData = (state: any, action: PayloadAction<any>) => {
  const { data } = action.payload;
  state.data = data;

  storage.setItem('venue', JSON.stringify(data));
};

export {
  setVenueData,
};
