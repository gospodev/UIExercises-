import React, {useState} from "react";
import Avatar from "react-avatar";
import { Link } from 'react-router-dom';
import '../style/UserAvatar.css';

function UserAvatar( {username, AvatarMenuData} ) {
    const [avMenu, setAvMenu] = useState(false);
    const showMenu = () => setAvMenu((prev) => !prev);

    return (
        <div className="user-avatar-wrapper">
            <Avatar
                size="32px"
                name={username}
                round={true}
                onClick={showMenu}
                textSizeRatio="1"
            />

            <ul className={avMenu ? "bnav-submenu active" : "bnav-submenu"}>
                {AvatarMenuData.map( (item, index) => (
                    <li key={index} className="bnav-text">
                        <Link to={item.path}>
                        {item.icon}
                        <div>{item.title}</div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserAvatar;