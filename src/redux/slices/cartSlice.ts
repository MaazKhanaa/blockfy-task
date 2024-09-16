import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  shoeName: string;
  price: number;
  image: string;
  quantity: number;
  tag: string;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<CartItem>) {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
    },
    removeItemFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increaseQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    }
  }
});

export const { addItemToCart, removeItemFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
