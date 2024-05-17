'use client'
import { library } from "@fortawesome/fontawesome-svg-core"
import { useState } from "react"

export default () => {

    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState(['ლექციაა გადასაღები', 'ტიკტოკია გადასაღები'])


    const onInput = (e: any) => {
        setTask(e.target.value)
    }   
    
    const onAddBtn = () => {
        if(task.length > 0) {
            setTasks([...tasks, task]);
            setTask('');
        }
    }

    return (
        <div>
            <input type="text" value={task} onChange={onInput} />
            <button onClick={onAddBtn}>დამატება</button>
            {
                tasks.map(item => <li>{item}</li>)
            }
        </div>
    )
}