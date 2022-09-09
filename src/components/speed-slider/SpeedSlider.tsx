import {BoardContext, BoardModel, Status} from "../../contexts/BoardContext";
import {useContext, useEffect, useRef} from "react";
import "./SpeedSlider.css";

export default function SpeedSlider() {
    const speed = useRef<HTMLInputElement>(null);
    const boardModel: BoardModel = useContext(BoardContext)!;

    useEffect(() => {
        boardModel.setSpeed(getSpeed());
    });

    function getSpeed(): number {
        return parseInt(speed!.current!.value);
    }

    function onSpeedChange() {
        boardModel.setSpeed(getSpeed());
    }

    return (
        <div id="SpeedSlider">
            <input
                type="range"
                name="speed"
                id="speed"
                max="2000"
                min="0"
                defaultValue="0"
                ref={speed}
                onChange={onSpeedChange}
                disabled={boardModel.status === Status.IN_PROGRESS}
            />
        </div>
    )
}