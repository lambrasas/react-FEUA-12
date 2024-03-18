import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [viewers, setViewers] = useState(["Petras x 7 Bilietai"]);
  const [count, setCount] = useState(1);

  const onSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || count < 1) {
      alert("Please enter a valid name and ticket count.");
      return;
    }
    const viewer = `${name} x ${count} Bilietai`;
    setViewers([...viewers, viewer]);
    setName("");
    setCount(1);
  };

  return (
    <div>
      <h1>Forum Cinemas</h1>
      <form onSubmit={onSubmit}>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Vardas"
        />
        <input
          value={count}
          onChange={(event) => setCount(parseInt(event.target.value, 10))}
          type="number"
          min="1"
          placeholder="Bilietu kiekis"
        />
        <button type="submit">Pirkti Bilietus</button>
      </form>
      <ul>
        {viewers.map((viewer, index) => (
          <li key={index}>{viewer}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
