import { useNavigate } from "react-router-dom";

export function useNavigateTo() {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return navigateTo;
}