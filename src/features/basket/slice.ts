import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { setBasketData } from './reducer';

const slice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setBasketData,
  },
});

export default slice;
