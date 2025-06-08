import { Link, useLocation } from "react-router-dom"

export default function EditTaskPage() {
    const location = useLocation();
    const {name} = location.state;
    return (
        <div>
            <header>
                <h1>Менеджер задач</h1>
                <Link to="/" >К списку задач</Link>
            </header>
            <main>
                изменить задачу {name}
            </main>
        </div>
    );
}