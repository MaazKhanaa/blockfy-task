import React from 'react';
import upperArrow from '../../assets/images/upper-arrow.png';
import lowerArrow from '../../assets/images/lower-arrow.png';
import { RiDeleteBin6Line } from "react-icons/ri";
import { useShoppingComponent } from './use-shopping';

interface CartItem {
  id: string;
  shoeName: string;
  price: number;
  image: string;
  quantity: number;
  tag: string;
}

interface ShoppingCartCardProps {
  item: CartItem;
}

export const ShoppingCartCard: React.FC<ShoppingCartCardProps> = ({ item }) => {
  const {
    handleRemoveItem,
    handleIncreaseQuantity,
    handleDecreaseQuantity
  } = useShoppingComponent()

  return (
    <div className="p-[24px] border border-[#EDEDED] w-full rounded-[16px] mb-4">
      <div className="flex flex-wrap items-center justify-between">
        <div className='bg-gray-light rounded-lg h-[100px] px-3 w-[100px] flex items-center justify-center'>
          <img src={item.image} alt={item.shoeName} className="w-[100px]" />
        </div>
        <div className="ml-4 flex-1">
          <h2 className="font-bold text-md">{item.shoeName}</h2>
          <p className="italic">{item.tag}</p>
        </div>
        <div className='flex gap-5 items-center justify-between'>
          <div className="flex gap-2 items-center">
            <span className='text-xl'>{item.quantity}</span>
            <div>
              <button className='block w-auto mb-1' onClick={handleIncreaseQuantity}>
                <img src={upperArrow} alt='Increase' width={17} />
              </button>
              <button className='block w-auto' onClick={handleDecreaseQuantity}>
                <img src={lowerArrow} alt='Decrease' width={17} />
              </button>
            </div>
          </div>
          <p className="font-bold text-md">${item.price}</p>
          <button
            className="text-black p-2 rounded"
            onClick={() => handleRemoveItem(item.id)}
          >
            <RiDeleteBin6Line size={23} />
          </button>
        </div>
      </div>
    </div>
  );
};