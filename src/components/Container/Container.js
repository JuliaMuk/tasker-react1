import Task from "../Task/Task";
import './Container.css';
export default function Container(){
    let tasks = [
        'купить молоко',
        'сделать ИДЗ',
        'сходить в театр'
    ]
    return (
        <div className="container">
            {
                tasks.map((item, index)=>(
                    <Task 
                        name={item} 
                        key={index} 
                    />
                ))
            }
        </div>
    );
}