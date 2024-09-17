import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// Define the structure for each cart item
interface CartItem {
  id: string;
  shoeName: string;
  price: number;
  image: string;
  quantity: number;
  tag: string;
}

// Define the structure for the cart state
interface CartState {
  items: CartItem[];
}

// Define the initial state
const initialState: CartState = {
  items: []
};

// Create the cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<CartItem>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
        toast.success('Item quantity increase in cart!');

      } else {
        state.items.push(newItem);
        toast.success('Item added to cart!');
      }
    },

    removeItemFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      toast.success('Item remove from cart!');

    },

    increaseQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find((i) => i.id === action.payload);
      toast.success('Item quantity increase in cart!');
      if (item) {
        console.log(`Increasing quantity for item ${item.id}`);  // Debugging log
        item.quantity += 1;
      } else {
        console.warn(`Item with id ${action.payload} not found`);  // Debugging log
      }
    },

    decreaseQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
      toast.success('Item quantity decrease in cart!');
        console.log(`Decreasing quantity for item ${item.id}`);
        item.quantity -= 1;
      } else if (item && item.quantity === 1) {
        console.warn(`Cannot decrease quantity below 1 for item ${item.id}`);
      toast.error('Item quantity cannot decrease there is only 1 item!');
        
      } else {
        console.warn(`Item with id ${action.payload} not found`);
      }
    }
  }
});

// Export the actions
export const { addItemToCart, removeItemFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;