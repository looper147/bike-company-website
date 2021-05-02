import "./navigation.bar.css";
import SearchBox from "./components/searchBox.js"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { NavLink } from "react-router-dom";
export default function NavigationBar(props) {
    return (
        <>
            <nav>

                <ul>
                    <li>
                        <NavLink exact to="/" ><button className="navBt">Home<ArrowDropDownIcon style={{ color: "transparent" }} /></button> </NavLink>
                    </li>

                    <li>
                        <div className="dropdown">
                            <NavLink to="/News">
                                <button className="dropbtn">News<ArrowDropDownIcon /></button>
                            </NavLink>
                            <div className="dropdown-content">
                                <button>Latest News</button>
                                <button>Newest Bikes</button>
                                <button>Sports</button>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="dropdown">
                            <button className="dropbtn">Types<ArrowDropDownIcon /></button>
                            <div className="dropdown-content">
                                <button>Street</button>
                                <button>Off-road</button>
                                <button>Dual purpose</button>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="dropdown">
                            <button className="dropbtn">Model Year<ArrowDropDownIcon /></button>
                            <div className="dropdown-content">
                                <button>1970-2000</button>
                                <button>2001-2010</button>
                                <button>2010-2021</button>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="dropdown">
                            <button className="dropbtn">Manufacturers<ArrowDropDownIcon /></button>
                            <div className="dropdown-content">
                                <button>Harley-Davidson	</button>
                                <button>Honda</button>
                                <button>Yamaha</button>
                                <button>Kawasaki</button>
                                <button>Suzuki</button>
                            </div>
                        </div>
                    </li>

                    <li>
                        <SearchBox style={{ border: "none" }} />
                    </li>

                    <li style={{ float: "right" }}>
                        {props.lightMode}
                    </li>
                </ul>

            </nav>
        </>

    )
}
