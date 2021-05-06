import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const BoldText = styled.b`
    color: ${({ theme }) => theme.borderTop}
`
// import { makeStyles } from "@material-ui/core/styles";

// const styles = makeStyles({
//     text: {
//         color: "white",
//     },
// })

export default function HomePage() {
    return (
        <>
            <Typography variant={"h3"} component={"h3"}>
                Find The <BoldText>Best</BoldText> Bike!
            </Typography>


        </>
    );

}