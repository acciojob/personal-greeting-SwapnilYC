
import React from 'react';
import { useState } from 'react'
// import './styles.css';

// don't change the Component name "App"
export default function App() {
  const [message, setMessage] = useState('');

  const textEntered = (e) => {
    if (e.target.value) {
      setMessage('Hello ' + e.target.value + '!');
    }
    else {
      setMessage("");
    }
  }

  return (
    <div>
      <label>Enter your Name:</label>
      <input type='text' onInput={textEntered} />
      <p>{message}</p>
    </div>
  );

}