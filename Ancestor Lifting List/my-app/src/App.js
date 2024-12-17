

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Hello from './components/Hello';

import AxiosGetDemo from './axiosDemo/axiosGetDemo.js';  
import ToDoList from './components/todolist/toDoList.js';  

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
      </div>
      <Routes>
        <Route path="/hello" element={<Hello />} />
        
        <Route path="/getPosts" element={<AxiosGetDemo />} />  
        <Route path="/toDoList" element={<ToDoList />} /> 
      </Routes>
    </Router>
  );
}

export default App;


