// App.jsx
import React from 'react';
import './App.css';
import Avatar from './Avatar.jsx';
import Card from './Card.jsx'
import Products from './Products.jsx';

const App = () => {
  return (
    <>
      <div className="container">
        <Avatar name="Linas Ambrasas" />
        <Avatar name='Tomas Dambrauskas'/>
      </div>
      <div className="cardsContainer">
        <Card imageUrl='src\assets\wp7196967.jpg' title='Rome' subtitle='Rome was osum as hell' ></Card>
        <Card imageUrl='src\assets\wp7196967.jpg' title='Rome' subtitle='Rome was osum as hell' ></Card>
        <Card imageUrl='src\assets\wp7196967.jpg' title='Rome' subtitle='Rome was osum as hell' ></Card>
        <Card imageUrl='src\assets\wp7196967.jpg' title='Rome' subtitle='Rome was osum as hell' ></Card>
        <Card imageUrl='src\assets\wp7196967.jpg' title='Rome' subtitle='Rome was osum as hell' ></Card>
        <Card imageUrl='src\assets\wp7196967.jpg' title='Rome' subtitle='Rome was osum as hell' ></Card>
        <Card imageUrl='src\assets\wp7196967.jpg' title='Rome' subtitle='Rome was osum as hell' ></Card>
      </div>
      <div className="productsContainer">
        <Products category='Music' name='Jabra Pro 2 wireless earbuds' price = '50$' />
        <Products category='Music' name='Jabra Pro 2 wireless earbuds' price = '50$' />
        <Products category='Music' name='Jabra Pro 2 wireless earbuds' price = '50$' />
        <Products category='Music' name='Jabra Pro 2 wireless earbuds' price = '50$' />
        <Products category='Music' name='Jabra Pro 2 wireless earbuds' price = '50$' />
        <Products category='Music' name='Jabra Pro 2 wireless earbuds' price = '50$' />
        <Products category='Music' name='Jabra Pro 2 wireless earbuds' price = '50$' />
        <Products category='Music' name='Jabra Pro 2 wireless earbuds' price = '50$' />
        <Products category='Music' name='Jabra Pro 2 wireless earbuds' price = '50$' />
        <Products category='Music' name='Jabra Pro 2 wireless earbuds' price = '50$' />
        
      </div>
    </>
  );
};

export default App;
