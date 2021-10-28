import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';import Navbar from './components/Navbar';
import MenuSection from './components/MenuSection';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <MenuSection/>
      </Router>
    </>
  )
}

export default App;
