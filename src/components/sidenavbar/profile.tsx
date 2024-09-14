import { useSideNavbarComponent } from "./use-sidenavbar";
import UserPic from '../../assets/images/user.jpg'




export const ProfileComponent = () => {


    const { } = useSideNavbarComponent();


    return (

        <div className="flex items-center gap-3">
            <div>
                <img src={UserPic} width={50} className="rounded-md h-[50px] object-cover" alt="profile pic" />
            </div>
            <div>
                <h5 className="font-semibold text-sm">Name</h5>
                <p className="font-normal text-xs">Email@email.com</p>
            </div>
        </div>
    )
}
