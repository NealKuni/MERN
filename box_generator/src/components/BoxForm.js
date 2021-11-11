import React, { useState } from 'react';

const BoxForm = (props) => {
    const [boxColor, setBoxColor] = useState("");
    const [boxSize, setBoxSize] = useState("")
    const [boxArr, setBoxArr] = useState([])

    const handleSubmit= (e) => {
        e.preventDefault();
        const boxObj = {
            boxColor,
            boxSize
        };
        setBoxArr([...boxArr, boxObj]);
        setBoxColor("");
        setBoxSize("");
    };

    const handleBoxColor = (e) => {
        setBoxColor(e.target.value);
    }
    const handleBoxSize = (e) => {
        setBoxSize(e.target.value);
    }

    return(
        <div >
            <form onSubmit={ handleSubmit }>
                <div>
                    <label> Color: </label>
                    <input type="text" onChange={ handleBoxColor } value={ boxColor }/>
                </div>
                <div>
                    <label> Size: </label>
                    <input type="text" onChange={ handleBoxSize } value={ boxSize }/>
                </div>

                <button type="submit">Submit Box</button>
            </form>
            
            <h2>Color Boxes</h2>
            {boxArr.map((box, index) => (
                <div 
                    key={{index}} 
                    style={{ 
                        backgroundColor: box.boxColor, 
                        height:box.boxSize + "px", 
                        width: box.boxSize + "px", 
                        display: "inline-block",
                        margin: "10px"
                    }}>
                </div>
            ))}
        </div>

    )
}

export default BoxForm;