import { IconContext } from "react-icons";
import * as FaIcons from  "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export default function SideBar() {
    return (
        <>
        <IconContext.Provider value ={{ color: "#d0cbcb" }}>
            <button>
                <FaIcons.FaBars/>
            </button>

            <nav>
                <ul>
                    <li>
                        <button>
                            <AiIcons.AiOutlineClose/>
                        </button>
                    </li>

                    <div>
                        <button>
                            <AiIcons.AiOutlineFilter/> Clear Filter
                        </button>
                    </div>

                    <div>
                        <input type="text" placeholder="Search products..."/>
                    </div>
                </ul>
            </nav>
        </IconContext.Provider>

        </>
    )
}