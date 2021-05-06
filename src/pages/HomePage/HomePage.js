import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import pic from "./components/darkMode2.jpg";
const BoldText = styled.b`
    color: ${({ theme }) => theme.borderTop}
`


const ThemedContainer = styled.div`
    && {
        text-align: center;
    },
    `

export default function HomePage() {
    return (
        <>
            <ThemedContainer >
                <Typography variant={"h3"} component={"h3"} >
                    Find The <BoldText>Best</BoldText> Bike!
                </Typography>
                <Typography variant={"h5"} component={"h5"}>
                    Welcome To Bike Browser! Find The Best Bike For You!
                </Typography>
            </ThemedContainer>



        </>
    );

}