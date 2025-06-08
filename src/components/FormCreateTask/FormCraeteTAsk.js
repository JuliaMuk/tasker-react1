export default function FormCraeteTAsk(){
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("create");
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="Введите задачу" />
                </div>
                <div>
                    <input type="submit" value="Создать задачу" />
                </div>
            </form>
        </div>
    )
}