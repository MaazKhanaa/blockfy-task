
import { useNavigate } from "react-router-dom";



export const useNotFoundComponent = () => {

    const navigate = useNavigate();



    const handleGoBack = () => {
        navigate(-1);
    };


    return {
        handleGoBack
    };
};
