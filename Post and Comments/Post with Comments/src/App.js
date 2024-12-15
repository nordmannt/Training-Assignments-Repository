
import './App.css';
import BlogList from './BlogList.js';

import Hello from './hello.js';
import Home from './Home.js';
function App() {
  let message=""
    return(
      <div className="App">
        <h2>Family Holiday Blog</h2>
        <h3>{message}</h3>
        <Hello name="Tyson" lastname="Nordmann"/>
        <Home/>
        <BlogList/>
        
      </div>
    
  );
}

export default App;
