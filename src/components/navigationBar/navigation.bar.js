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
                    <a href="#">Street</a>
                    <a href="#">Off-road</a>
                    <a href="#">Dual purpose</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Model Year</button>
                <div className="dropdown-content">
                    <a href="#">1970-2000</a>
                    <a href="#">2001-2010</a>
                    <a href="#">2010-2021</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Manufacturers</button>
                <div className="dropdown-content">
                    <a href="#">Harley-Davidson	</a>
                    <a href="#">Honda</a>
                    <a href="#">Yamaha</a>
                    <a href="#">Kawasaki</a>
                    <a href="#">Suzuki</a>
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
