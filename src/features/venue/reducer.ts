/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction } from '@reduxjs/toolkit';
import { storage } from '../../store/persist';
import { ViewVenueOutput } from '../../services/VenueServices/types';

type VenueDataType = {
  items: ViewVenueOutput[];
  lastUpdated: string;
};

type StateType = {
  data: VenueDataType | null;
};

const setVenueData = (state: StateType, action: PayloadAction<{ data: VenueDataType }>) => {
  const { data } = action.payload;
  state.data = data;

  storage.setItem('venue', JSON.stringify(data));
};

export {
  setVenueData,
};
