import "./navigation.bar.css";
import SearchBox from "./components/searchBox.js"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
export default function NavigationBar() {
    return (
        <>
            <nav>

                <ul>
                    <li>
                        <button className="navBt">Home<ArrowDropDownIcon style={{ color: "transparent" }} /></button>
                    </li>

                    <li>
                        <div className="dropdown">
                            <button className="dropbtn">News<ArrowDropDownIcon /></button>
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


                </ul>






            </nav>

        </>

    )
}
