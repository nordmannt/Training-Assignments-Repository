import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>The React Demo Website</h2>
      <div className="links">
        {/* Correct usage of Link components */}
        <Link to="/hello">Hello</Link>
         <Link to="/getPosts">Posts</Link>  {/* Fixed link to /getPosts */}
        <Link to="/toDoList">To Do List</Link>  {/* Ensure you add this if you want it */}
      </div>
    </div>
  );
};

export default Navbar;
