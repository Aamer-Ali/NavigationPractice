import {createSlice} from '@reduxjs/toolkit';
export const cartSlice = createSlice({
  name: 'cart',
  initialState: {cartItems: []},
  reducers: {
    addItemToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        item => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({...action.payload, quantity: 1});
      }
    },
  },
});

export const {addItemToCart} = cartSlice.actions;
export default cartSlice.reducer;
