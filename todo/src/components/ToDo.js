import React, { useState } from 'react';
import Styles from './ToDo.module.css';

const ToDo = (props) => {
    const [task, setTask] = useState("");
    const [taskArr, setTaskArr] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTaskObject ={
            task,
            completed: false
        }
        setTaskArr([...taskArr, newTaskObject]);
        setTask("");
    }
    const handleDelete = (indexFromBelow) => {
        const filteredArr = [...taskArr].filter( 
            (element, idx) => idx !== indexFromBelow
        );
        setTaskArr(filteredArr);
    }

    const handleCheckbox = (checkboxValue, indexFromBelow) => {
        let taskCompleted = {...taskArr[indexFromBelow]};
        taskCompleted.completed = checkboxValue;
        setTaskArr (
            [...taskArr.slice(0, indexFromBelow), taskCompleted].concat(
                taskArr.slice(indexFromBelow + 1)
            )
        )
    };
    return (
        <div>
            <h1> To Do</h1>
            <hr></hr>
            <form onSubmit={ (e) => handleSubmit(e) }>
                <h4>List:</h4>
                <input type="text" onChange={(e) => setTask(e.target.value)}></input>
                <button type="submit">Add Task</button>
            </form>
            <hr></hr>
            <div>
                {taskArr.map((task, index) => (
                    <div className="" style={{display: "flex", justifyContent: "center"}} key={index}>
                        <input type="checkbox" onChange={ (e) => handleCheckbox(e.target.checked, index) }></input>
                        
                        <p className={task.completed ? Styles.taskCompleted: Styles.taskNotCompleted}> {task.task} </p>
                        <button onClick={ () => handleDelete(index) } style={{ backgroundColor: "black", color:"white"}} >Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default ToDo;