import React from "react";
function User({ name, surname }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{surname}</p>
    </div>
  );
}

export default User;
