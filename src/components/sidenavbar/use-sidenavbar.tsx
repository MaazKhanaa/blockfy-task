import { useNavigate } from "react-router-dom";

export const useSideNavbarComponent = () =>{


    const navigate = useNavigate(); // Hook to navigate programmatically

    const handleLogout = () => {
      localStorage.removeItem('user');
      navigate('/auth/login');
    };

    
    return {
        handleLogout
    }
}