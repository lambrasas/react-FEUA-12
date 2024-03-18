import React from 'react';

import './App.css'

function FuncButton({ text }) {
  return <button>{text}</button>
}

function FuncDiv({ buttonText }) {
  return (
    <div>
      <h3>I am h3 inside FuncDiv</h3>
      <FuncButton text={buttonText} />
    </div>
  )
}
function ClassButton({ text }) {
  return <button>{text}</button>;
}

function ClassDiv({ buttonText }) {
  return (
    <div>
      <h3>This is a functional div</h3>
      <ClassButton text={buttonText} />
    </div>
  );
}

function App() {
  return (
    <main>
      <FuncDiv buttonText="I am a button from FuncButton" />
      <ClassDiv buttonText="I am a button from ClassButton" />
    </main>
  )
}
export default App


export { FuncButton, FuncDiv, ClassButton, ClassDiv };

