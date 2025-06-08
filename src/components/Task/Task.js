import { useState } from 'react';
import { PencilFill, TrashFill } from 'react-bootstrap-icons';
import './Task.css';
import { Link } from 'react-router-dom';
export default function Task({ name, deleteTask, tasks }) {
    const [isVisible, setIsVisible] = useState(true);
    const [count, setCount] = useState(1);

    const taskRemove = () => {
        console.log(tasks);
        deleteTask(tasks.filter((item) => item !== name));
        console.log(tasks);
    }

    return (
        <div className="task">
            <span>{name}</span>
            <Link to="/edit-task" state={{name:name}}>
                <PencilFill
                    className='btn-edit'
                />
            </Link>
            <TrashFill
                className='btn-remove'
                onClick={taskRemove}
            />
            {count}
        </div>
    );
}

