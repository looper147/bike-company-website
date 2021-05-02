import BikeCard from "./components/BikeCard.js";
import bikePic from "./components/MonsterEnergyYamahaRacingEdition.jpg";
export default function HomePage() {
    return (
        <>
            <h2>Welcome To The Home Page </h2>

            <BikeCard
                picSrc={bikePic}
                picTitle={"YZ450F MONSTER ENERGY YAMAHA RACING EDITION"}
                bikeName={"YZ450F MONSTER ENERGY YAMAHA RACING EDITION"}
                bikePrice={"9599$"}

            />
        </>
    );

}