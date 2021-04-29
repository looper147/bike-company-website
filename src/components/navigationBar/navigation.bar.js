import "./navigation.bar.css";
import SearchBox from "./components/searchBox.js"
import LightMode from "./components/lightMode.js";
export default function NavigationBar() {
    return (
        <div className="navbar">
            <button className="navBt">Home</button>
            <button className="navBt">New</button>
            <div className="dropdown">
                <button className="dropbtn">Types</button>
                <div className="dropdown-content">
                    <a >Street</a>
                    <a >Off-road</a>
                    <a >Dual purpose</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Model Year</button>
                <div className="dropdown-content">
                    <a>1970-2000</a>
                    <a>2001-2010</a>
                    <a>2010-2021</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Manufacturers</button>
                <div className="dropdown-content">
                    <a>Harley-Davidson	</a>
                    <a>Honda</a>
                    <a>Yamaha</a>
                    <a>Kawasaki</a>
                    <a>Suzuki</a>
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
