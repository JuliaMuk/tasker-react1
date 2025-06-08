//import logo from './logo.svg';
import './App.css';
import Container from './components/Container/Container';
import FormCraeteTAsk from './components/FormCreateTask/FormCraeteTAsk';
import { useState } from 'react';

function App() {
  const [tasks, setTasks]= useState([
    'купить молоко',
    'сделать ИДЗ',
    'сходить в театр'
  ]);

  return (
    <div>
      <header>
        <h1>Менеджер задач</h1>
      </header>
      <main>
        <FormCraeteTAsk addTask = {setTasks} tasks={tasks}/>
        <Container tasks={tasks}/>
      </main>
    </div>
  );
}

export default App;
