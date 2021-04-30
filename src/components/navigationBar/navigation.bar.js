import "./navigation.bar.css";
import SearchBox from "./components/searchBox.js"
import LightMode from "./components/lightMode.js";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
export default function NavigationBar() {
    return (
        <>
            <nav>

                <ul>
                    <li>
                        <button className="navBt">Home<ArrowDropDownIcon /></button>
                    </li>

                    <li>
                        <button className="navBt">News<ArrowDropDownIcon /></button>
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

                    <li style={{ float: "right", width: "20%" }}>
                        {/*light mode*/}
                        <label>
                            Light Mode
                        <LightMode style={{ display: "inline-block" }} />
                        </label>


                    </li>
                </ul>






            </nav>

        </>

    )
}
