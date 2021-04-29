import "./navigation.bar.css";
import SearchBox from "./components/searchBox.js"
import LightMode from "./components/lightMode.js";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
export default function NavigationBar() {
    return (
        <div className="navbar">
            <button className="navBt">Home</button>
            <button className="navBt">News</button>
            <div className="dropdown">
                <button className="dropbtn">Types<ArrowDropDownIcon /></button>
                <div className="dropdown-content">
                    <button>Street</button>
                    <button>Off-road</button>
                    <button>Dual purpose</button>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Model Year<ArrowDropDownIcon /></button>
                <div className="dropdown-content">
                    <button>1970-2000</button>
                    <button>2001-2010</button>
                    <button>2010-2021</button>
                </div>
            </div>
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
            <SearchBox />
            <div style={{ float: "right" }}>
                {/*light mode*/}
                <label>
                    Light Mode
                    <LightMode style={{ display: "inline-block" }} />
                </label>


            </div>


        </div>
    )
}
