const emptyBasket = {};

const storedData = localStorage.getItem('menu');
const basket = storedData
  ? JSON.parse(storedData)
  : emptyBasket;

export const initialState = {
  data: basket,
};
