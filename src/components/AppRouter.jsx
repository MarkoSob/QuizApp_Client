import React from 'react'
import {Route, Routes, Navigate} from "react-router-dom";
import {publicRoutes, authorizedRoutes} from '../router/Routes';
import {useContext} from 'react';
import {AuthContext} from '../context/context';

const AppRouter = () => {

    const {isAuth} = useContext(AuthContext);

    return (
        isAuth
            ?
            <Routes>
                {authorizedRoutes.map(route =>
                    <Route
                        key={route.path}
                        exact={route.exact}
                        path={route.path}
                        element={route.element}
                    />
                )}
                <Route path='/login' element={<Navigate to='/quiz' replace/>}/>
                <Route path='/' element={<Navigate to='/quiz' replace/>}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        key={route.path}
                        exact={route.exact}
                        path={route.path}
                        element={route.element}
                    />
                )}
                <Route path='*' element={<Navigate to='/login' replace/>}
                />
            </Routes>
    )
}
export default AppRouter;