import BikeCard from "./HomePage/components/BikeCard.js";
import bikePic from "./HomePage/components/MonsterEnergyYamahaRacingEdition.jpg";
import bikePic2 from "./HomePage/components/VSTAR250.jpg";
import bikePic3 from "./HomePage/components/YZF-R3MONSTERENERGYYAMAHAMOTOGPEDITION.jpg"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles/";

const styles = makeStyles({
    card: {
        textAlign: "center"
    }
})
export default function NewsPage() {
    return (
        <>
            <h2>Welcome To The News Page!</h2>
            <Grid container spacing={1}>
                <Grid item xs className={styles.card}>
                    <BikeCard
                        picSrc={bikePic}
                        picTitle={"YZ450F MONSTER ENERGY YAMAHA RACING EDITION"}
                        bikeName={"YZ450F MONSTER ENERGY YAMAHA RACING EDITION"}
                        bikePrice={"9599$"}

                    />
                </Grid>
                <Grid item xs>
                    <BikeCard
                        picSrc={bikePic2}
                        picTitle={"V STAR 250"}
                        bikeName={"V STAR 250"}
                        bikePrice={"4449$"}
                    />
                </Grid>
                <Grid item xs>
                    <BikeCard
                        picSrc={bikePic3}
                        picTitle={"YZF-R3 MONSTER ENERGY YAMAHA MOTOGP EDITION"}
                        bikeName={"YZF-R3 MONSTER ENERGY YAMAHA MOTOGP EDITION"}
                        bikePrice={"5599"}

                    />
                </Grid>
            </Grid>




        </>
    );
}