import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://sophisticated-humane-dandelion.glitch.me")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.map((item) => item.image));
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);
  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div>
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <img
              className="apiImage"
              src={item.image}
              alt={`Image of ${item.title}`}
            />
            <h3>{item.title}</h3>
            <p>{item.price}</p>
          </div>
        ))}
    </div>
  );
};

export default App;
