// Conditional rendering
// .map()

import DisplayName from "./DIsplayName";
import Greeting from "./Greeting";
import VacationBox from "./VacationBox";

const App = () => {
  const name = "Rokas";
  const isShortName = name.length <= 5 ? "is short name" : "is long name"; // ternary

  const checkIsShortName = () => {
    if (name.length <= 5) {
      return <h1>is short name</h1>;
    } else {
      return <h1>is long name</h1>;
    }
  };

  const checkGreeting = (name) => {
    if (!name) {
      return <div>Hello guest, please log in first.</div>;
    }

    return <div>Hello {name}, how are you today?</div>;
  };

  const vacationDays = 7;
  const users=[{name:"Linas",surname:"Ambrasas",vacationDays:5},{name:"Rokas",surname:"Alalala", vacationDays:20},{name:"Tomas",surname:"Tamsauskas", vacationDays:20}]
  const namesBlock =users.map((user)=> <li>{user.name}</li> )
  const names = users.map((user)=> user.name) ;
  return (
    <div>
      <ul>{namesBlock}</ul>
      <ul>
        {users.map((user)=>(
          <li key={user.name}>{user.name}</li>
        ))}
      </ul>
      {isShortName}
      <br />
      {checkIsShortName()}

      <Greeting name={name} />
      <br />
      <Greeting />

      {checkGreeting()}
      {checkGreeting(name)}

      <DisplayName name={name} />
      <DisplayName name="Tadukas" />
      <VacationBox name="Romas" count={0} />
      <VacationBox name="Tadukas" count={-2} />
      <VacationBox name={name} count={vacationDays} />
      <VacationBox name="Rimas" count={24} />

      <VacationBox count={4} />
    </div>
  );
};

export default App;