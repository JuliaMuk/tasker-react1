import Container from "../components/Container/Container";
import FormCraeteTAsk from "../components/FormCreateTask/FormCraeteTAsk";

export default function MainPage(props) {
    return (
        <div>
            <header>
                <h1>Менеджер задач</h1>
            </header>
            <main>
                <FormCraeteTAsk addTask={props.setTasks} tasks={props.tasks} />
                <Container tasks={props.tasks} deleteTask={props.setTasks} />
            </main>
        </div>
    );
}