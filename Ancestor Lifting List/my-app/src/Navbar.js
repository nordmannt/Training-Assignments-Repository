import { Link } from 'react-router-dom';  

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>The React Demo Website</h2>
      <div className="links">
        
        <Link to="/hello">Hello</Link>
         <Link to="/getPosts">Posts</Link>  
        <Link to="/toDoList">To Do List</Link>  
      </div>
    </div>
  );
};

export default Navbar;
