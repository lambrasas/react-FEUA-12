import React from "react";
import "./App.css";
import { useState } from "react";
/// Onclick- paspaudus
/// onMouseOver-uzvedus
/// onChange - kai pasikeicia ivestas tekstas

const App = () => {
  const [hovering, setHovering] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState(750);
  const [fullName, setFullName] = useState("");
  return (
    <div>
      <button onClick={() => alert("Linas")}>Click me</button>
      <button
        onMouseOver={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        Hover me
      </button>
      <div
        className="box"
        style={{ backgroundColor: hovering ? "red" : "blue" }}
      ></div>
      <br />
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter your name..."
      />
      <input
        type="number"
        value={age}
        onChange={(event) => setAge(event.target.value)}
        placeholder="Enter your age..."
      />
      <h2>
        My name is {name} and i am {age} old
      </h2>
      <br />
      <br />

      <form action="">
        <h2>Registration form</h2>
        <p>Please fill all fields</p>
        <div>
          <label style={{ display: "block" }} htmlFor="">
            Full Name
          </label>
          <input
            type="number"
            value={salary}
            onChange={(event) => setSalary(event.target.value)}
          />
        </div>
        <button type="submit">Submit form</button>
      </form>
    </div>
  );
};

export default App;
