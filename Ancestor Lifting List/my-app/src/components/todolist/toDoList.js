import { useState } from "react";
import ToAddList from './add.js';  // Corrected path for add.js
import CountList from './listCount.js';  // For counting the list items
import ShowList from './listshow.js';    // For displaying the list

const ToDoList = () => {
  const [list, setList] = useState([]);  // To manage the list of items
  const [value, setValue] = useState("");  // To manage the input field value

  const addItem = (newItem) => {
    setList((prevList) => [...prevList, newItem]);  // Add new item to the list
  };

  return (
    <div>
      
      <ShowList list={list} />  {/* Pass the list to ShowList */}

      <ToAddList 
        value={value}  // Pass the value of the input
        setValue={setValue}  // Pass the setter function to update the value
        addItem={addItem}  // Pass the addItem function to add to the list
      />
      
      <CountList list={list} />  {/* Pass the list to CountList */}
    </div>
  );
}

export default ToDoList;
