import { useState } from "react";
import "./App.css";

const App = () => {
  const [balance, setBalance] = useState(500);

  function Deposit(amount) {
    setBalance(balance + amount);
  }

  return (
    <div className="mainDiv">
      <p>Jusu balansas: {balance}$</p>
      <button onClick={() => setBalance(balance - 10)} disabled={balance < 10}>
        Isimti 10$
      </button>
      <button onClick={() => setBalance(balance - 10)} disabled={balance < 50}>
        Isimti 50$
      </button>
      <button onClick={() => Deposit(100)}>Prideti 100$</button>

      <button onClick={() => setBalance(balance - balance)}>
        Withdraw all
      </button>
    </div>
  );
};
export default App;
