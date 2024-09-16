import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { ShoppingCartCard } from './shopping-cart-card';
import UserPic from '../../assets/images/user.jpg'
import cards from '../../assets/images/cards.png'
import { GoArrowRight } from "react-icons/go";
import { useShoppingComponent } from './use-shopping';


interface CartItem {
  id: string;
  shoeName: string;
  price: number;
  image: string;
  quantity: number;
  tag: string
}

export const ShoppingCartComponent: React.FC = () => {

  const {
    cartItems,
    subtotal,
    shippingCost,
    total
  } = useShoppingComponent()

  return (
    <Fragment>
      <div className='bg-white rounded-xl p-4'>
        <div className='grid grid-cols-5 gap-4'>
          <div className='col-span-5 xl:col-span-3'>
            <div className="col-span-4 border-b pb-4">
              <div className="">
                <Link to="/dashboard" className="flex gap-3 text-xl items-center">
                  <IoIosArrowBack />
                  <span>Shopping Continue</span>
                </Link>
              </div>
            </div>
            {/* Left column: Shopping Cart */}
            <div className="col-span-5 lg:col-span-3">
              <h3 className="font-semibold text-lg">Shopping Cart</h3>
              <p className="text-xs">You have {cartItems.length} item(s) in your cart</p>

              <div className="mt-5">
                {cartItems.map((item: CartItem) => (
                  <ShoppingCartCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
          <div className='col-span-5 xl:col-span-2'>
            <div className="bg-primary p-5 rounded-xl">
              <div className='flex justify-between items-center mb-5'>
                <div>
                  <h4 className="font-semibold text-lg text-white">Card Details</h4>
                </div>
                <div>
                  <img src={UserPic} width={50} className="rounded-md h-[50px] object-cover" alt="profile pic" />
                </div>
              </div>

              <div className='mb-5'>
                <p className='mb-3 text-white'>Card type</p>
                <img src={cards} alt='cards' />
              </div>

              <div className='mb-5'>
                <label className='text-white'>Name on card</label>
                <input className='mt-2 bg-[#BA68C8] rounded-md h-[48px] w-full text-white outline-none p-3' placeholder='Name' />
              </div>

              <div className='mb-5'>
                <label className='text-white mb-3'>Card Number</label>
                <input className='mt-2 bg-[#BA68C8] rounded-md h-[48px] w-full text-white outline-none p-3' type='number' placeholder='1111 2222 3333 4444' />
              </div>

              <div className='grid grid-cols-2 mb-5 gap-4 pb-5 border-b border-[#BA68C8]'>
                <div className='col-span-2 sm:col-span-1'>
                  <label className='text-white mb-3'>Expiration date</label>
                  <input className='mt-2 bg-[#BA68C8] rounded-md h-[48px] w-full text-white outline-none p-3' placeholder='mm/yy' />
                </div>
                <div className='col-span-2 sm:col-span-1'>
                    <label className='text-white mb-3'>CVV</label>
                    <input className='mt-2 bg-[#BA68C8] rounded-md h-[48px] w-full text-white outline-none p-3' placeholder='123' />
                </div>
              </div>

              <p className="text-white mb-3 flex justify-between">
                <span>Subtotal</span> <span>${subtotal}</span>
              </p>
              <p className="text-white mb-3 flex justify-between">
                <span>Shipping</span> <span>${shippingCost}</span>
              </p>
              <p className="text-white mb-3 flex justify-between">
                <span>Total (Tax incl.)</span> <span>${total}</span>
              </p>
              <button className="bg-[#BA68C8] h-[60px] rounded=[12px] items-center px-[20px] text-md text-white p-2 rounded mt-3 flex justify-between w-full">
                <span>${total}</span>
                <span className='flex items-center gap-3'>Proceed to Checkout <GoArrowRight size={22} /> </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
