import QueenSelector from "../queen-selector/QueenSelector";
import SpeedSlider from "../speed-slider/SpeedSlider";
import Buttons from "../buttons/Buttons";
import "./Nav.css";

export default function Nav() {
    return (
        <nav>
            <QueenSelector/>
            <SpeedSlider/>
            <Buttons/>
        </nav>
    )
}