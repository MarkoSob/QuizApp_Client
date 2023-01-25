import React from 'react'
import {useContext} from 'react';
import AuthService from '../../../API/AuthService';
import {AuthContext} from '../../../context/context';
import NavbarButton from '../buttons/NavbarButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Navbar.module.css';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const logout = () => {
        AuthService.logout();
        setIsAuth(false);
    }

    const rootClasses = [classes.userBtns];
    if (isAuth) {
        rootClasses.push(classes.active);
    }

    return (
        <div>
            <nav className='px-3 d-flex justify-content-between navbar navbar-expand navbar-dark bg-dark'>
                <div className='d-flex justify-content-between align-items-end'>
                    <img style={{width: '35px', height: '35px'}} src='/quizlogo.png' alt='no'/>
                </div>
                <div className={rootClasses.join(' ')}>
                    <div className={classes.menuBtn}>
                    </div>
                    <div className={classes.navBtns}>
                        <NavbarButton onClick={logout}>
                            Logout
                        </NavbarButton>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;