import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import AppHeader from './components/AppHeader';
import ProductGrid from './components/ProductGrid';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import UserAvatar from './components/UserAvatar';
import SideBar from './components/SideBar';
import AccordionMenu from './components/AcordionMenu'
import ModalWindow from './components/ModalWindows';
import AppFooter from './components/AppFooter';

function App() {
  return (
    <div>
      <Router>
        <AppHeader />
      </Router>
    </div>
  );
}

export default App;
