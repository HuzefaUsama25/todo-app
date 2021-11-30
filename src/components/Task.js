import React from 'react';


function Task(props) {
    
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

    const handleDeleteTask = async () => {
        let task = document.getElementById(props.id)
        task.animate(
            [
                { transform: 'scale(0, 0) translateX(30em)', opacity: '0' }
            ],
            {
                duration: 500,
                iterations: 1,
            }
        );
        await delay(500)
        task.remove()
    }

    const handleCompleteTask = () => {
        let task = document.getElementById(props.id)
        task.style['background-color'] = 'rgb(0, 255, 128)';
        task.animate(
            [
                { transform: 'scale(2, 2)' , opacity: '150%' }
            ],
            {
                duration: 2,
                iterations: 100,
            }
        );
    }


    return (<>
        <div className="task" id={props.id}>
            {props.text}
            <div className="task-action-container">
                <div className="cross" onClick={handleDeleteTask}>
                    ✗
                </div>
                <div className="cross tick" onClick={handleCompleteTask}>
                    ✔
                </div>
            </div>
        </div>
    </>
    )
}

export default Task
