import {useContext} from 'react'
import AuthService from '../API/AuthService'
import {AuthContext} from '../context/context'
import React, {useState} from "react";
import '../styles/App.css';
import ConfirmButton from '../components/UI/buttons/ConfirmButton'
import Notiflix from 'notiflix'
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';
import MyModal from '../components/UI/mymodal/MyModal';
import RegistrationForm from '../components/registration_form/RegistrationForm';

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [registerModal, setRegisterModal] = useState(false);

    const SignupSchema = Yup.object().shape({
        login: Yup.string().email('Invalid login/email').required('Login is required'),
        password: Yup.string().required('Password is required')
    });

    const register = () => {
        setRegisterModal(false);
    }

    return (
        <div className='loginPage'>
            <Formik
                initialValues={{
                    login: '',
                    password: ''
                }}
                validationSchema={SignupSchema}
                onSubmit={async (values) => {
                    try {
                        await AuthService.login(values.login, values.password);
                        setIsAuth(true);
                    } catch (error) {
                        Notiflix.Notify.failure('The email address or password is incorrect, or the user does not exist. Please try again.');
                    }
                }}>
                {({errors, touched}) =>
                    <Form className='newLoginForm'>
                        <div>
                            {errors.login && touched.login ? (
                                <label className='errorLabel'>{errors.login}</label>
                            ) : (<label>Login</label>)}
                            <Field
                                name='login'
                                type='login'
                                className={classNames('formInput', {['formInputError']: errors.login && touched.login})}
                            />
                        </div>
                        <div>
                            {errors.password && touched.password ? (
                                <label className='errorLabel'>{errors.password}</label>
                            ) : (<label>Password</label>)}
                            <Field
                                name='password'
                                type='password'
                                className={classNames('formInput', {['formInputError']: errors.password && touched.password})}
                            />
                        </div>
                        <div style={{marginTop: 15}}>
                            <div>
                                <ConfirmButton style={{width: '85px'}} type='submit'>Login</ConfirmButton>
                                <ConfirmButton style={{width: '85px', marginLeft: 4}} type='button'
                                               onClick={() => setRegisterModal(true)}>Sing Up
                                </ConfirmButton>
                            </div>
                        </div>

                    </Form>
                }
            </Formik>
            <div>
                <MyModal visible={registerModal} setVisible={setRegisterModal}>
                    <RegistrationForm register={register}/>
                </MyModal>
            </div>
        </div>
    )
}

export default Login;