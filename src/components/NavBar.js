import {Link} from "react-router-dom";
import * as BiIcons from  "react-icons/bi";
import * as FiIcons from "react-icons/fi";
import * as MdIcons from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

function NavBar() {
    return(
        <nav>
            <div>
                <Link to="/">
                <BiIcons.BiHome/>
                </Link>
            </div>
            <div>
                <Link to="/contacts">
                <MdIcons.MdConnectWithoutContact/>
                </Link>
            </div>
            <div>
                <Link to="/settings">
                <FiIcons.FiSettings/>
                </Link>
            </div>
            <div>
                <Link to="/cart">
                    <FaShoppingCart />
                </Link>
            </div>
            <div>
                <Link to="/login">
                    <BiIcons.BiLogInCircle/>
                </Link>
            </div>
        </nav>
    );
}
export default NavBar;