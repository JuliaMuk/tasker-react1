import { useState } from 'react';
import { PencilFill,  TrashFill } from 'react-bootstrap-icons';
import './Task.css';
export default function Task ({name, deleteTask, tasks}){
    const [isVisible, setIsVisible] = useState(true);
    const [count, setCount] = useState(1);
   
    const taskRemove = () => {
        console.log(tasks);
        deleteTask(tasks.filter((item) => item !== name));
        console.log(tasks);
    }

    function taskEdit(){
        console.log("редактирование");
        setCount(count + 1);
    }

    return(
        <div className="task">
            <span>{name}</span>
            <PencilFill 
                className='btn-edit' 
                onClick={taskEdit}
            />
            <TrashFill 
                className='btn-remove' 
                onClick={taskRemove}
            />
            {count}
        </div>        
    );
}

