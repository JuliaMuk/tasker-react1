import logo from './logo.svg';
import './App.css';
import Container from './components/Container/Container';
import FormCraeteTAsk from './components/FormCreateTask/FormCraeteTAsk';

function App() {
  return (
    <div>
      <header>
        <h1>Менеджер задач</h1>
      </header>
      <main>
        <FormCraeteTAsk />
        <Container />  
      </main>
    </div>
  );
}

export default App;
