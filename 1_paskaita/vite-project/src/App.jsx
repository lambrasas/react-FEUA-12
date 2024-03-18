import React from 'react';
import './App.css';


function App() {
  return (
    <>
      <div className='logoDiv'>
        <img className='logo' src='src/bird.svg' alt="aws"/>
      </div>
      <div className='optionsDiv'>
        <a>Home</a>
        <a>Product</a>
        <a>Company</a>
        <a>Contact</a>
      </div>
      <img className='heroDiv' src="src/poco-people.png" alt="as"/>
      <div className='cards'>
        <div className='aboutCard'>
          <h1>About</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatibus eligendi nihil consequatur nesciunt? Necessitatibus officiis impedit iste ab accusantium.</p>
       </div>
        <div className='aboutCard'>
          <h1>About</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatibus eligendi nihil consequatur nesciunt? Necessitatibus officiis impedit iste ab accusantium.</p>
       </div>
        <div className='aboutCard'>
          <h1>About</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatibus eligendi nihil consequatur nesciunt? Necessitatibus officiis impedit iste ab accusantium.</p>
       </div>
      </div>
       <div className='contentDiv'>
        <div className='contentTextContainer'>
          <h1>Content</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, nisi? Delectus earum, a reprehenderit vel asperiores laborum est qui nobis.</p>
          <h1>Sub Header</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores eius maxime enim harum molestias quam debitis aliquid officia vero ipsa, quaerat autem consequuntur unde veniam. Consequuntur ipsum adipisci libero quo.</p>
        </div>
        <div className='navigationContainer'>
          <h1>Navigation</h1>
          <div className="navigationButtons">
            <button>Home</button>
            <button>Product</button>
            <button>Company</button>
            <button>Contact</button>
          </div>
        </div>
       </div>

    </>
  );
}
export default App;
