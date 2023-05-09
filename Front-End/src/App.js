import "./App.css";
import HomePage from "./components/HomePage";
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Route path="/" exact></Route>
      </BrowserRouter>
      <HomePage />
    </>
  );
}

export default App;
