import {useState} from 'react'
import "./App.css"

const App = () => {
  //     state, setState    initialValue
  const [count, setCount] = useState(0)
  const [errorMessage, setErrorMessage] = useState("")
  const [loggedName, setLoggedName] = useState("")
  return (
    <div>
      <p>My count is: {count}</p>
      <button onClick={()=>{
        if(count < 9){
          setCount(count+1)
        } else {
          setErrorMessage("Stop, isidejai uztektinai")
        }
      }}>Increase count</button>
      <button onClick={()=> setCount(count-1)}>Decrease count</button>
      <button onClick={()=> setCount(0)}>Reset count</button>
      {errorMessage && <p>{errorMessage}</p>}
      Hello {loggedName ? loggedName : "Guest"}, how are you today?
      <button onClick={()=>
      setLoggedName(loggedName ==="Guest" ? "Linas Ambrasas" : "Guest")}>
      {loggedName ==="Guest" ? "Login" :"Log out"}</button>
    </div>
  )
}

export default App