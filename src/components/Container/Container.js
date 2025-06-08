import Task from "../Task/Task";
import './Container.css';
export default function Container({tasks, deleteTask}){
        
    return (
        <div className="container">
            {
                tasks.map((item, index)=>(
                    <Task 
                        name={item} 
                        key={index} 
                        tasks = {tasks}
                        deleteTask = {deleteTask}
                    />
                ))
            }
        </div>
    );
}