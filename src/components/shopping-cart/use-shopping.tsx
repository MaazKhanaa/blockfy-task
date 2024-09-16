import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeItemFromCart } from "src/redux/slices/cartSlice";
import { RootState } from "src/redux/store/store";

export const useShoppingComponent = () =>{

    //shopping card logic here
    const dispatch = useDispatch();

    // Handle the removal of the item
    const handleRemoveItem = (id: string) => {
      dispatch(removeItemFromCart(id));
    };
  
    // Handle increasing the quantity
    const handleIncreaseQuantity = (item: any) => {
      dispatch(increaseQuantity(item.id));
    };
  
    // Handle decreasing the quantity
    const handleDecreaseQuantity = (item: any) => {
      dispatch(decreaseQuantity(item.id));
    };
  

    // shopping cart page logic
    // Type the cart items state properly using RootState
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
    }
}