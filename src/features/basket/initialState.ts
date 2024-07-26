import { BasketItemType } from './reducer';

const emptyBasket: BasketItemType[] = [];

const storedData = localStorage.getItem('basket');
const basket = storedData
  ? JSON.parse(storedData)
  : emptyBasket;

export const initialState = {
  data: basket,
};
