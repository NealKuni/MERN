import React, { useState } from 'react';

const PersonCard = (props) => {
    const { firstName, lastName, hairColor } = props; 
    const [ age, setAge] =useState(props.age);
    const handleClick = () => setAge(age + 1);
    return(
        <div>
            <h1>{lastName}, {firstName}</h1>  
            <p> Age: {age}</p>
            <p> Hair Color: {hairColor}</p>
            <button onClick= {handleClick} > Happy Birthday {firstName}!</button>
        </div>
    )
}

export default PersonCard;