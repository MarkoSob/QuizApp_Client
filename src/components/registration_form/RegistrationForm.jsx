import AuthService from '../../API/AuthService'
import React, {useState} from "react";
import '../../styles/App.css';
import classes from './RegistrationForm.module.css'
import ConfirmButton from '../UI/buttons/ConfirmButton';
import Notiflix from 'notiflix';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';

const RegistrationForm = ({register}) => {

    const [newUser, setNewUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'First Name must contain at least 2 characters')
            .max(50, 'Too Long!')
            .required('First Name is required'),
        lastName: Yup.string()
            .min(2, 'Last Name must contain at least 2 characters')
            .max(50, 'Too Long!')
            .required('Last Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            'Password must contain at least 8 characters, one uppercase, one number and one special character'
        ).required('Password is required')
    });

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            }}
            validationSchema={SignupSchema}
            onSubmit={async (values) => {
                try {
                    await AuthService.register(values.firstName, values.lastName, values.email, values.password);
                    register();
                    Notiflix.Notify.success('Registration was successful');
                    setNewUser({firstName: '', lastName: '', email: '', password: ''});
                } catch (error) {
                    Notiflix.Notify.failure('Registration error, please try again');
                }
            }}>
            {({errors, touched}) =>
                <Form className={classes.registrationForm}>
                    <div>
                        <h2>SIGN UP</h2>
                    </div>
                    <div>
                        {errors.firstName && touched.firstName ? (
                            <label className='errorLabel'>{errors.firstName}</label>
                        ) : (<label>First Name</label>)}
                        <Field
                            name='firstName'
                            type='firstName'
                            className={classNames('formInput', {['formInputError']: errors.firstName && touched.firstName})}
                        />
                    </div>
                    <div>
                        {errors.lastName && touched.lastName ? (
                            <label className='errorLabel'>{errors.lastName}</label>
                        ) : (<label>Last Name</label>)}
                        <Field
                            name='lastName'
                            type='lastName'
                            className={classNames('formInput', {['formInputError']: errors.lastName && touched.lastName})}
                        />
                    </div>
                    <div>
                        {errors.email && touched.email ? (
                            <label className='errorLabel'>{errors.email}</label>
                        ) : (<label>Email</label>)}
                        <Field
                            name='email'
                            type='email'
                            className={classNames('formInput', {['formInputError']: errors.email && touched.email})}
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
                    <div>
                        <ConfirmButton type='submit' style={{width: '100%', marginTop: 35}}> Register </ConfirmButton>
                    </div>
                </Form>
            }
        </Formik>
    )
}

export default RegistrationForm;