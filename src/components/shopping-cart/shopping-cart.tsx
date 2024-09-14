
import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { IoIosArrowBack } from "react-icons/io";
import { ShoppingCartCard } from "./shopping-cart-card";

export const ShoppingCartComponent = () => {


  return (

    <Fragment>
      <div className="grid grid-cols-4">
        <div className="col-span-2 border-b pb-4">
          <Link to="/dashboard" className="flex gap-3 text-xl items-center"><span><IoIosArrowBack /></span> Shopping Continoue</Link>
        </div>
      </div>
      
      <div className="grid grid-cols-5">
        <div className="col-span-3">
        <h3 className="font-semibold mt-5 text-lg">Shopping Cart</h3>
        <p className="text-xs">You have 3 item in your cart</p>

        <div className="mt-5">
          <ShoppingCartCard>
            <div>New</div>
          </ShoppingCartCard>
        </div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </Fragment>
  )
}
