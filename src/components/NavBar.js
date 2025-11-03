import {Link} from "react-router-dom";
import * as BiIcons from  "react-icons/bi";
import * as FiIcons from "react-icons/fi";
import * as MdIcons from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import '../style/NavBar.css';

function NavBar() {
    return(
        <nav className="nav-bar">
            <div>
                <Link to="/">
                <BiIcons.BiHome className="nav-bar-home"/>
                </Link>
            </div>
            <div>
                <Link to="/contacts" className="nav-bar-contacts">
                <MdIcons.MdConnectWithoutContact/>
                </Link>
            </div>
            <div>
                <Link to="/settings">
                <FiIcons.FiSettings className="nav-bar-settings"/>
                </Link>
            </div>
            <div>
                <Link to="/cart" className="cart-icon">
                    <FaShoppingCart className="nav-bar-cart"/>
                </Link>
            </div>
            <div>
                <Link to="/login">
                    <BiIcons.BiLogInCircle className="nav-bar-login"/>
                </Link>
            </div>
        </nav>
    );
}
export default NavBar;