import QueenSelector from "../queen-selector/QueenSelector";
import SpeedSlider from "../speed-slider/SpeedSlider";
import Buttons from "../buttons/Buttons";
import "./Nav.css";
import Queen from "../queen/Queen";

export default function Nav() {
    return (
        <nav>
            <Queen/>
            <QueenSelector/>
            <SpeedSlider/>
            <Buttons/>
        </nav>
    )
}