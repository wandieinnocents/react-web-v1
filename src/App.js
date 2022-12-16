import logo from './logo.svg';
import './App.css';
import About from './components/About';
import { Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
   <h1>Welcome to my react app!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
        pariatur?
      </p>
      <br />
      <Link to="/about">About Page</Link>
    </div>
  );
}

export default App;
