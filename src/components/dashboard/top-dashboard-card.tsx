import { Fragment } from "react/jsx-runtime"
import { bannerData } from "./dashboard.data"

export const TopDashboardCard = () => {
    return (
       <Fragment>
         {
            bannerData.map((item, index) => (
                <div className="bg-black rounded-lg py-[30px] px-[85px] grid grid-cols-2 items-center gap-6">
                    <div className="col-span-2 md:col-span-1">
                        <img src={item.bannerPic} alt="banner img" />
                    </div>
                    <div className="col-span-1">
                        <h1 className="text-white font-medium text-5xl">{item.bannerHeading}</h1>
                        <span className="bg-primary rounded-xl text-white font-medium text-4xl py-1 px-6 inline-block my-7">{item.bannerPrice}</span>
                        <p className="text-white text-xs mb-5">{item.bannerText}</p>
                        <button className="uppercase px-[15px] md:px-[31px] py-[11px] text-black text-[10px] bg-white font-semibold rounded-[12px]">Add to cart</button>
                    </div>
                </div>
            ))
        }
       </Fragment>
    )
}