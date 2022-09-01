import "./App.css";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import Shah from "./Shah";
const name = "Shah";
const bindAPI = "https://jsonplaceholder.typicode.com/comments";

function App() {
  // Changes the state changes
  const [val, setVal] = useState("Red");
  const newVal = () => {
    setVal("Orange");
  };
  // End state

  useEffect(() => {
    const getdata = async () => {
      const res = await axios.get(bindAPI);
      console.log(res.data);
    };
    getdata();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Heada />
        <h3>
          Hello {name} your favorite color is {val}
        </h3>
        <Button variant="contained" onClick={newVal}>
          Change your color
        </Button>
      </header>
      <br />
      <br />
      <hr />
      <h3>--| Nested Functions |--</h3>
      <hr />
      <Shah></Shah>
    </div>
  );
}

const Heada = () => {
  return <h1>React Hooks Tutorials</h1>;
};

export default App;
