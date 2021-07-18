import React, { useState } from 'react';
import { useRouter } from 'next/router';
const axios = require('axios');

export default function Registration() {

    const router = useRouter()

    const [registrationFormData, setRegistrationFormData] = useState({
        first_name: '',
        last_name: '',
        user_name: '',
        email: '',
        password: '',
    })



    const onSubmitRegistrationHandler = (e) => {
        e.preventDefault();
        if(
            registrationFormData.user_name.trim().length > 0 && 
            registrationFormData.email.trim().length > 0 && 
            registrationFormData.password.trim().length > 0
        ){
            axios.post('http://127.0.0.1:8000/api/registration',registrationFormData)
                .then(res => {
                    console.log('res',res.data)
                    // router.push('/')
                })
                .catch(err => console.log(err));
        }
    }

    const onChangeInput = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        setRegistrationFormData(prev => (
            {...prev, [field]: value}
        ))
    };

    return (
        <>
            <div className="all-title-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Registration</h2>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Login</a></li>
                                <li className="breadcrumb-item active">Registration</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cart-box-main">
                <div className="container">
                    <div className="row new-account-login">
                        <div className="col-sm-6 col-lg-6 mb-3">
                            <div className="title-left">
                                <h3>Account Login</h3>
                            </div>
                            <h5><a data-toggle="collapse" href="#formLogin" role="button" aria-expanded="false">Click here to Login</a></h5>
                            <form className="mt-3 collapse review-form-box" id="formLogin">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="InputEmail" className="mb-0">Email Address</label>
                                        <input type="email" className="form-control" id="InputEmail" name="email" placeholder="Enter Email" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="InputPassword" className="mb-0">Password</label>
                                        <input type="password" className="form-control" id="InputPassword" name="password" placeholder="Password" />
                                    </div>
                                </div>
                                <button type="submit" className="btn hvr-hover">Login</button>
                            </form>
                        </div>
                        <div className="col-sm-6 col-lg-6 mb-3">
                            <div className="title-left">
                                <h3>Create New Account</h3>
                            </div>
                            <h5><a data-toggle="collapse" href="#formRegister" role="button" aria-expanded="false">Click here to Register</a></h5>
                            <form onSubmit={onSubmitRegistrationHandler} className="mt-3 collapse review-form-box" id="formRegister">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="InputName" className="mb-0">First Name</label>
                                        <input type="text" onChange={onChangeInput} className="form-control" name="first_name" value={registrationFormData.first_name} id="InputName" placeholder="First Name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="InputLastname" className="mb-0">Last Name</label>
                                        <input type="text" onChange={onChangeInput} className="form-control" name="last_name" value={registrationFormData.last_name} id="InputLastname" placeholder="Last Name" /> 
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="InputLastname" className="mb-0">User Name</label>
                                        <input type="text" onChange={onChangeInput} className="form-control" name="user_name" value={registrationFormData.user_name} id="InputUsername" placeholder="User Name" /> 
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="InputEmail1" className="mb-0">Email Address</label>
                                        <input type="email" onChange={onChangeInput} className="form-control" name="email" value={registrationFormData.email} id="InputEmail1" placeholder="Enter Email" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="InputPassword1" className="mb-0">Password</label>
                                        <input type="password" onChange={onChangeInput} className="form-control" name="password" value={registrationFormData.password} id="InputPassword1" placeholder="Password" /> 
                                    </div>
                                </div>
                                <button type="submit" className="btn hvr-hover">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}