

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Hello from './components/Hello';
//mport StateDemoComponent from './StateDemoComponent';  // Assuming you have this component
import AxiosGetDemo from './axiosDemo/axiosGetDemo.js';  // Assuming this component exists
import ToDoList from './components/todolist/toDoList.js';  // Assuming this component exists

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
      </div>
      <Routes>
        <Route path="/hello" element={<Hello />} />
        
        <Route path="/getPosts" element={<AxiosGetDemo />} />  {/* Corrected Axios component */}
        <Route path="/toDoList" element={<ToDoList />} />  {/* Corrected to a valid component */}
      </Routes>
    </Router>
  );
}

export default App;


/*

 <Route path="/sdc" element={<StateDemoComponent />} />  {/* Fixed the incomplete part }
import logo from './logo.svg';
import './App.css';
import  './axiosDemo/axiosGetDemo.js';
import  './axiosDemo/displayPost.js';
import  './listandkeys/commentdiplaycomponent.js';
import  './listandkeys/listkeysandComponent.js';
import ListandKeysComponent from './listandkeys/listkeysandComponent.js';


function App() {
  return (

<Router>
  <div classname="app"
  <Navbar/>
<Router/>
</div>
<routes>
<route path = "/Hello"
<route path = "/sdc"state demo component
<route path ='/getpostos' element=[<Axios getDemo]
<route path = '/toDoList' element =
</routes>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
         <ListandKeysComponent/>;
         
          
      
      </header>
    </div>
  );
}

export default App;
*/