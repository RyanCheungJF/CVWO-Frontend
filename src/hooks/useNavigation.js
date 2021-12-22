import { useNavigate } from 'react-router-dom';

function useNavigation(path) {
    const navigate = useNavigate();
    return (e) => {
        e.preventDefault();
        navigate(path);
    }
}

export default useNavigation
