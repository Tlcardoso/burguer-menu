import { PayloadAction } from '@reduxjs/toolkit';
import { ModifierItem } from '../../services/VenueServices/types';
import { v4 as uuidv4 } from 'uuid';

export type BasketItemType = {
  name: string;
  id: number;
  price: number;
  qty: number;
  items: ModifierItem | null;
  uuid?: string;
};

type BasketType = BasketItemType

type StateType = {
  data: BasketItemType[];
};

type UpdateQtyPayload = {
  groupId?: string;
  increment: boolean;
};

const setBasketData = (state: StateType, action: PayloadAction<BasketType>) => {
  const newItem = action.payload;
  const newGroup = {
    uuid: uuidv4(),
    ...newItem,
  };
  state.data.push(newGroup);
};

const updateItemQuantity = (state: StateType, action: PayloadAction<UpdateQtyPayload>) => {
  const { groupId, increment } = action.payload;
  const groupIndex = state.data.findIndex(group => group.uuid === groupId);

  if (groupIndex !== -1) {
    const group = state.data[groupIndex];

    if (increment) {
      group.qty += 1;
    } else {
      if (group.qty > 1) {
        group.qty -= 1;
      } else {
        state.data.splice(groupIndex, 1);
        return;
      }
    }

    if (group.qty > 0) {
      state.data[groupIndex] = group;
    }
  }
};

export {
  setBasketData,
  updateItemQuantity,
};
