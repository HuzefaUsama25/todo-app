import React from 'react';

import confetti from './confetti.gif'

function Task(props) {

    document.body.style.backgroundImage = ""

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

    const handleDeleteTask = async () => {
        let task = document.getElementById(props.id)
        task.animate(
            [
                { transform: 'scale(-1, -1) translateX(50em)', opacity: '0' }
            ],
            {
                duration: 300,
                iterations: 1,
            }
        );
        await delay(300)
        task.remove()
    }

    const handleCompleteTask = () => {

        let body = document.getElementsByTagName('body')[0]
        let task = document.getElementById(props.id)

        task.style['background-color'] = 'rgb(0, 255, 128)';
        task.animate(
            [
                { transform: 'scale(2, 2)', opacity: '150%' }
            ],
            {
                duration: 500,
                iterations: 1,
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
