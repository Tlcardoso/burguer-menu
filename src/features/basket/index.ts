import basket from './slice';

const { reducer } = basket;

export const { setBasketData, updateItemQuantity } = basket.actions;
export default reducer;
