import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import Carousel from "./components/Carousel.js";

const styles = makeStyles({
    body: {
        textAlign: "center",
    },


})
const BoldText = styled.b`
    color: ${({ theme }) => theme.borderTop}
`



export default function HomePage() {
    const classes = styles();
    return (
        <>
            <Typography variant={"h3"} component={"h3"} className={classes.body}>
                Find The <BoldText>Best</BoldText> Bike!
                </Typography>

            <Typography variant={"h5"} component={"h5"} className={classes.body}>
                Welcome To Bike Browser! Find The Best Bike For You!
                </Typography>

            <Carousel className={classes.carousel} />



        </>
    );

}