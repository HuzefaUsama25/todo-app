import React from 'react';


function Task(props) {
    const handleDeleteTask = () => {
        let task = document.getElementById(props.id)
        console.log(props.id)
        task.remove()
    }

    return (<>
        <div className="task" id={props.id}>
            {props.text}
            <div className="task-action-container">
                <div className="cross" onClick={handleDeleteTask}>
                    ✗
                </div>
                <div className="cross tick" onClick={handleDeleteTask}>
                    ✔
                </div>
            </div>
        </div>
    </>
    )
}

export default Task
