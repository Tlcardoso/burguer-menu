import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { setBasketData, updateItemQuantity } from './reducer';

const slice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setBasketData,
    updateItemQuantity,
  },
});

export default slice;
