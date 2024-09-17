import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeItemFromCart } from "src/redux/slices/cartSlice";
import { RootState } from "src/redux/store/store";

export const useShoppingComponent = () => {
  const dispatch = useDispatch();

  // Handle the removal of the item
  const handleRemoveItem = (id: string) => {
    dispatch(removeItemFromCart(id));
  };

  // Handle increasing the quantity
  const handleIncreaseQuantity = (id: string) => {
    dispatch(increaseQuantity(id));  // Ensure only the ID is passed
  };

  // Handle decreasing the quantity
  const handleDecreaseQuantity = (id: string) => {
    dispatch(decreaseQuantity(id));  // Ensure only the ID is passed
  };

  // Select cart items from the Redux store
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // Calculate subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Define shipping cost
  const shippingCost = 4;

  // Calculate total
  const total = subtotal + shippingCost;

  return {
    cartItems,
    subtotal,
    shippingCost,
    total,
    handleRemoveItem,
    handleIncreaseQuantity,
    handleDecreaseQuantity
  };
};