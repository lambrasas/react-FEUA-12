import React from "react";

const DateDisplay = () => {
  const currentDate = new Date();

  const dateString = currentDate.toLocaleDateString("lt-LT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <p>{dateString}</p>
    </div>
  );
};

export default DateDisplay;
