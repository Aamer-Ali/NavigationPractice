import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface CartProduct extends Product {
  quantity: number;
}

const cartItem: CartProduct[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {cartItem},
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartProduct>) => {
      const existingItem = state.cartItem.find(
        item => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItem.push({...action.payload, quantity: 1});
      }
    },
  },
});

export const {addItemToCart} = cartSlice.actions;
export default cartSlice.reducer;
