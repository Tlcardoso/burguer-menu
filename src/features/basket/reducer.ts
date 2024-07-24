import { PayloadAction } from '@reduxjs/toolkit';
import { storage } from '../../store/persist';

type BasketItemType = {
  name: string;
  id: string;
  price: number;
  qty: number;
  items: {
    name: string;
    price: number;
  }[];
};

type BasketType = {
  items: BasketItemType[];
  subTotal: number;
  total: number;
};

type StateType = {
  data: BasketType | null;
};

const setBasketData = (state: StateType, action: PayloadAction<{ data: BasketType }>) => {
  const { data } = action.payload;
  state.data = data;

  storage.setItem('venue', JSON.stringify(data));
};

export {
  setBasketData,
};
