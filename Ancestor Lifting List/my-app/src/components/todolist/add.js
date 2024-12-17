import { useState } from "react";

const ToAddList = ({value, setValue, addItem}) => {
  
  
    const submitHandler = (e) => {
      e.preventDefault();
      if(value){
        addItem(value);
        setValue("");
      }
    };
   
    return (
     
        <form onSubmit={submitHandler}>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
          <button>Add</button>
        </form>
      
    );
  }
  
  export default ToAddList;
  