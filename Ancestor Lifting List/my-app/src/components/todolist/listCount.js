import { useState } from "react";

const CountList = ({list}) => {
  
  return (
    
      <h3 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>Total Elements : {list.length}</h3>
    
  );
}

export default CountList;