import { useState } from "react";
import ToAddList from './add.js';  
import CountList from './listCount.js';  
import ShowList from './listshow.js';    

const ToDoList = () => {
  const [list, setList] = useState([]);  
  const [value, setValue] = useState(""); 

  const addItem = (newItem) => {
    setList((prevList) => [...prevList, newItem]);  
  };

  return (
    <div>
      
      <ShowList list={list} />  

      <ToAddList 
        value={value} 
        setValue={setValue}  
        addItem={addItem}  
      />
      
      <CountList list={list} />  
    </div>
  );
}

export default ToDoList;
