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
    /*<div>
      <Login></Login>
    </div>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<NavBar />}></Route>
        </Routes>
      </Router>
    </div>
    <UserAvatar></UserAvatar>

    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SideBar />}></Route>
        </Routes>
      </Router>
    </div>

    <div>
      <Router>
        <Routes>
          <Route path="/" element={<AccordionMenu />}></Route>
        </Routes>
      </Router>
    </div>*/

    
      
        /*...*/
        <div>
          <AppFooter></AppFooter>
        </div>
  );
}

export default App;
