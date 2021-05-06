import "./searchBox.css";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";

const Sicon = styled(SearchIcon)`
    &&{
        color: ${({ theme }) => theme.text};
    }
    &:hover{
        color: white;
    }

`

export default function SearchBox() {
    return (
        <div className="container">
            <div className="search-box">
                <input type="text" className="search-box-input" placeholder="What are you looking for ?" />
                <button className="search-box-btn" >
                    <Sicon className="searchIcon" />
                </button>
            </div>
        </div>
    );
}