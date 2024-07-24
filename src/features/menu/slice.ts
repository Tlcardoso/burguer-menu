import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { setMenuData } from './reducer';

const slice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenuData,
  },
});

export default slice;
