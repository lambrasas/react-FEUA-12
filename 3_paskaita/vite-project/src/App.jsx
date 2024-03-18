import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button.jsx';
import Hero from './components/Hero/Hero.jsx';
import UserCard from './components/UserCard.jsx';

const App = () => {
  const user = { id: 1, name: "Linas", surname: "Ambrasas", age: 26 };
  const notifications = {1:27}
  return (
    <>
      <Hero title="Hello" subtitle="Labas" color="red" />
      <div>
        <Button text="Press me!" type="button" className="btn" />
      </div>
      <UserCard></UserCard>
    </>
  );
};

export default App;
