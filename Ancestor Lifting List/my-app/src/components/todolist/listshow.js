import { useState } from "react";

const ShowList = ({ list }) => {  
    return (
        <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'left', 
          padding: '20px',
          width: '80%', 
          maxWidth: '650px', 
          backgroundColor: '#f0f0f0', 
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
          borderRadius: '8px', 
          margin: '40px auto', 
        }}
      >        <h3>To Do List</h3>
        <ul>
          {list.map((item) => (  
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ShowList;  
  