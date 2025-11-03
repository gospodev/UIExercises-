import React, {useState} from "react";
import Avatar from "react-avatar";

function UserAvatar() {
    const [avMenu, setAvMenu] = useState(false);
    const showMenu = () => setAvMenu((prev) => !prev);

    return (
        <div >
            <Avatar
            size="32px"
            name="Bussiness informatics"
            round={true}
            onClick={showMenu}
            textSizeRatio="1" 
            />
        </div>
    )
}
export default UserAvatar;