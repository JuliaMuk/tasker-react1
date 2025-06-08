import { useState } from "react";

export default function FormCraeteTAsk({addTask, tasks}){
    const [value, setValue ] = useState('');

    const handleValueChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        addTask([...tasks, value])
        
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="Введите задачу" value={value} onChange={handleValueChange}/>
                </div>
                <div>
                    <input type="submit" value="Создать задачу" />
                </div>
            </form>
        </div>
    )
}