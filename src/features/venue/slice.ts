import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { setVenueData } from './reducer';

const slice = createSlice({
  name: 'venue',
  initialState,
  reducers: {
    setVenueData,
  },
});

export default slice;
