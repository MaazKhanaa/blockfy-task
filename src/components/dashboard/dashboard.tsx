
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { Fragment } from "react/jsx-runtime";
import { TopDashboardCard } from "./top-dashboard-card";
import girlImg from '../../assets/images/girl.png';
import dots from '../../assets/images/dots.png';
import { dashboardCardData } from "./dashboard.data";
import { FaHeart } from "react-icons/fa";
import stars from '../../assets/images/stars.png';


export const DashboardComponent = () => {


  return (

    <Fragment>
      <div className="flex justify-end">
        <Link to="/shopping-cart" className="flex gap-3 items-center bg-white rounded-full px-[32px] py-[16px]"><span><BsCart /></span> My Cart</Link>
      </div>

      <div className="grid grid-cols-7 h-full gap-5 mt-5">
        <div className="col-span-5 h-full">
          <TopDashboardCard />
        </div>
        <div className="col-span-2 h-full">
          <div className="bg-[#E4E4E4] relative h-full rounded-lg py-[43px] px-[17px]">
            <img src={dots} alt="bgimg" className="w-full absolute bottom-0 left-0 z-1" />
            <div className="grid grid-cols-5 h-full justify-end items-end">
              <div className="col-span-2">
                <img src={girlImg} alt="grl img" className="absolute bottom-6 left-2" width={170} />
              </div>
              <div className="col-span-3">
                <h1 className="text-7xl font-semibold">50<sup className="text-4xl">%</sup><sub className="text-3xl">OFF</sub></h1>
                <h2 className="py-2 border-t mt-3 text-2xl text-center font-semibold">RUNNING KIT</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mt-5">
        {dashboardCardData.map((item, index) => (
          <div className="col-span-2">
            <div className="bg-white rounded-lg" key={index}>
              <div className="h-[200px] flex items-center justify-center">
              <img src={item.cardImg} alt="card img" width={150} />
              </div>
              <div className="grid grid-cols-2">
                <div className="col-span-1">
                  <button className="bg-black uppercase text-xs py-3 w-full text-white">Add to cart</button>
                </div>
                <div className="col-span-1">
                  <button className="bg-primary uppercase text-xs py-3 w-full text-white">Quick view</button>
                </div>
              </div>

              <div className="flex justify-between items-center mx-3 my-1 border-b">
                <h2 className="text-md font-semibold">{item.shoeName}</h2>
                <h2 className="text-md font-semibold flex items-center gap-1"><FaHeart className="text-primary" /> ${item.price}</h2>
              </div>

              <div className="flex justify-between items-center mx-3 pb-3">
                <h2 className="text-sm font-normal italic">{item.tag}</h2>
                <img src={stars} alt="review" width={50} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  )
}
