import React, { useState } from 'react';

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");


    const createUser = (e) => {
        e.preventdefault();
        const newUser = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password, 
            confirm_password: confirmPassword
        };
        console.log(newUser);
    };
    const handleFirstName = (e) =>{
        setFirstName(e.target.value);
        if(e.target.value.length < 3) {
            setFirstNameError('First name requires at least 2 characters.');
        } else {
            setFirstNameError("");
        }
    };
    const handleLastName = (e) =>{
        setLastName(e.target.value);
        if(e.target.value.length < 3) {
            setLastNameError('Last name requires at least 2 characters.');
        } else {
            setLastNameError("");
        }
    };
    const handleEmail = (e) =>{
        setEmail(e.target.value);
        if(e.target.value.length < 3) {
            setEmailError('Email requires at least 2 characters.');
        } else {
            setEmailError("");
        }
    };
    const handlePassword = (e) =>{
        setPassword(e.target.value);
        if(e.target.value.length < 9) {
            setPasswordError('Password requires at least 8 characters.');
        } else {
            setPasswordError("");
        }
    };
    const handleConfirmPassword = (e) =>{
        setConfirmPassword(e.target.value);
        if(e.target.value !== password) {
            setConfirmPasswordError('Passwords must match.')
        } else {
            setConfirmPasswordError("")
        }
    };

    return (
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label> First Name:</label>
                    <input type="text" onChange={ handleFirstName } />
                    {
                        firstNameError ?
                        <p>{firstNameError}</p>:
                        ""
                    }
                </div>
                <div>
                    <label> Last Name:</label>
                    <input type="text" onChange={ handleLastName } />
                    {
                        lastNameError ?
                        <p>{lastNameError}</p>:
                        ""
                    }
                </div>
                <div>
                    <label> Email Address:</label>
                    <input type="text" onChange={ handleEmail } />
                    {
                        emailError ?
                        <p>{emailError}</p>:
                        ""
                    }
                </div>
                <div>
                    <label> Password:</label>
                    <input type="password" onChange={ handlePassword } />
                    {
                        passwordError ?
                        <p>{passwordError}</p>:
                        ""
                    }
                </div>
                <div>
                    <label> Confrim Password:</label>
                    <input type="password" onChange={ handleConfirmPassword } />
                    {
                        confirmPasswordError ?
                        <p>{confirmPasswordError}</p>:
                        ""
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>
    );
};

export default Form;