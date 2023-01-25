import {useEffect, useState} from 'react';
import {AuthContext} from "../../context/context";

const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setIsAuth(true);
        }
        setIsLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth, isLoading}}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;