import "./searchBox.css";
import SearchIcon from "@material-ui/icons/Search";
export default function SearchBox() {
    return (
        <div className="container">
            <div className="search-box">
                <input type="text" className="search-box-input" placeholder="What are you looking for ?" />
                <button className="search-box-btn" >
                    <SearchIcon />
                </button>
            </div>
        </div>
    );
}