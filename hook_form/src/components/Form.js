import React, { useState } from 'react';

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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
    return (
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label> First Name:</label>
                    <input type="text" onChange={ (e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label> Last Name:</label>
                    <input type="text" onChange={ (e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label> Email Address:</label>
                    <input type="text" onChange={ (e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label> Password:</label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label> Confrim Password:</label>
                    <input type="text" onChange={ (e) => setConfirmPassword(e.target.value)} />
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