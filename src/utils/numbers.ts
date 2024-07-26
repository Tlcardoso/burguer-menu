import { BasketItemType } from '../features/basket/reducer';

export const calculateTotalSale = (basketItems: BasketItemType[]): number => {
  return basketItems.reduce((total, item) => {
    return total + (item.price * item.qty);
  }, 0);
};

export const calculateTotalQtyByName = (basketItems: BasketItemType[], itemName: string): number => {
  return basketItems
    .filter(item => item.name === itemName)
    .reduce((totalQty, item) => {
      return totalQty + item.qty;
    }, 0);
};


export const calculateTotalQty = (basketItems: BasketItemType[]): number => {
  return basketItems.reduce((totalQty, item) => totalQty + item.qty, 0);
};
