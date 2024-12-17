// src/Hello.js

import React from 'react';

const Hello = () => {
  return (
    <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center', 
          padding: '20px',
          width: '80%', 
          maxWidth: '650px', 
          backgroundColor: '#fff0f0', 
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
          borderRadius: '8px', 
          margin: '40px auto', 
        }}className="hello">
      <h1>Hello! Welcome to Tyson's Monday Assigments Page!</h1>
      <br>
      </br>
      <p>Crud Operations Using JSON Server, and Lifting the State Up.</p>
    </div>
  );
};

export default Hello;
