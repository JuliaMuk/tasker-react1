//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Container from './components/Container/Container';
import FormCraeteTAsk from './components/FormCreateTask/FormCraeteTAsk';
import { useState } from 'react';
import MainPage from './pages/MainPage';
import EditTaskPage from './pages/EditTaskPage';

function App() {
  const [tasks, setTasks] = useState([
    'купить молоко',
    'сделать ИДЗ',
    'сходить в театр'
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage tasks={tasks} setTasks={setTasks}/>} />
        <Route path='/edit-task' element={<EditTaskPage tasks={tasks} setTasks={setTasks}/>} />
        <Route path="*" element={<MainPage tasks={tasks} setTasks={setTasks}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
