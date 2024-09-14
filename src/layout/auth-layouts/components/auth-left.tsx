import { Fragment } from "react/jsx-runtime"
import AuthImg from '../../../assets/images/authImg.png'

export const AuthLeftComponent = () => {
    return (
        <Fragment>
            <div className="bg-primary h-full w-full flex justify-center items-center">
                <div>
                    <img src={AuthImg} alt="auth img" />
                    <h2 className="text-3xl text-white text-center pt-4">Welcome to our shop</h2>
                    <p className="text-center text-white pt-2">Purchase imported shoes</p>
                </div>
            </div>
        </Fragment>
    )
} 