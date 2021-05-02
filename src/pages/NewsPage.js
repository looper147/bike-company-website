import BikeCard from "./HomePage/components/BikeCard.js";
import bikePic from "./HomePage/components/MonsterEnergyYamahaRacingEdition.jpg";
export default function NewsPage() {
    return (
        <>
            <h2>Welcome To The News Page!</h2>

            <BikeCard
                picSrc={bikePic}
                picTitle={"YZ450F MONSTER ENERGY YAMAHA RACING EDITION"}
                bikeName={"YZ450F MONSTER ENERGY YAMAHA RACING EDITION"}
                bikePrice={"9599$"}

            />

        </>
    );
}