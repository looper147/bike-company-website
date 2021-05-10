import React from "react";
import "./navigation.bar.css";
import SearchBox from "./components/searchBox.js"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    toggle: {
        display: "none",
        fontSize: "70px",
    },
    "@media (max-width:768px)": {
        toggle: {
            display: "block",
        },
        button: {
            display: "none",
        },
        hidden: {
            "& li button": {
                display: "block",
                fontSize: "35px",
                padding: "0px",
                margin: "10px",
            },
            "& a": {
                textDecoration: "none",
            }

        }
    }
})
const Button = styled.button`
    &&{
        color: ${({ theme }) => theme.text}!important;
        border-top: 1px solid transparent !important;
        transition: all 0.4s ease;
        
    }
    &:hover{
        color: ${({ theme }) => theme.borderTop} !important;
        border-top: 1px solid ${({ theme }) => theme.borderTop} !important;
        transition: all 0.4s ease;
    }
    
    

`
const DropBtn = styled.button`
    &&{
        color: ${({ theme }) => theme.text}!important;
        background: ${({ theme }) => theme.body}!important;
        float: none;
        padding: 20px 25px;
        width: 100%;
        font-size: 14px;
        text-decoration: none;
        display: block;
        text-align: left;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        border-bottom: 0.6px solid grey;

    }
    &:hover{
        font-weight: bold;
        color: ${({ theme }) => theme.borderTop} !important;
    }
    
    
    `
export default function NavigationBar(props) {
    const classes = useStyles();
    const [showLinks, setShowLinks] = React.useState(false);

    return (
        <>
            <Button onClick={() => setShowLinks(!showLinks)}><MenuIcon className={classes.toggle} /></Button>
            {props.lightMode}
            <nav>

                <ul className={showLinks ? classes.hidden : ""}>
                    <li>
                        <NavLink exact to="/" ><Button className={classes.button}>Home<ArrowDropDownIcon style={{ color: "transparent" }} /></Button> </NavLink>
                    </li>

                    <li>
                        <div className="dropdown">
                            <NavLink to="/News">
                                <Button className={classes.button}>News<ArrowDropDownIcon /></Button>
                            </NavLink>
                            <div className="dropdown-content">
                                <DropBtn>Latest News</DropBtn>
                                <DropBtn>Newest Bikes</DropBtn>
                                <DropBtn>Sports</DropBtn>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="dropdown">
                            <Button className={classes.button}>Types<ArrowDropDownIcon /></Button>
                            <div className="dropdown-content">
                                <DropBtn>Street</DropBtn>
                                <DropBtn>Off-road</DropBtn>
                                <DropBtn>Dual purpose</DropBtn>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="dropdown">
                            <Button className={classes.button}>Model Year<ArrowDropDownIcon /></Button>
                            <div className="dropdown-content">
                                <DropBtn>1970-2000</DropBtn>
                                <DropBtn>2001-2010</DropBtn>
                                <DropBtn>2010-2021</DropBtn>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="dropdown">
                            <Button className={classes.button}>Manufacturers<ArrowDropDownIcon /></Button>
                            <div className="dropdown-content">
                                <DropBtn>Harley-Davidson	</DropBtn>
                                <DropBtn>Honda</DropBtn>
                                <DropBtn>Yamaha</DropBtn>
                                <DropBtn>Kawasaki</DropBtn>
                                <DropBtn>Suzuki</DropBtn>
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
