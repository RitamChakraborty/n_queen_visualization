import {BoardContext, BoardModel, Status} from "../../contexts/BoardContext";
import {useContext, useLayoutEffect, useRef} from "react";
import "./SpeedSlider.css";

export default function SpeedSlider() {
    const speed = useRef<HTMLInputElement>(null);
    const boardModel: BoardModel = useContext(BoardContext)!;

    useLayoutEffect(() => {
        boardModel.setSpeed(getSpeed());
    });

    function getSpeed(): number {
        return speed.current ? parseInt(speed!.current!.value) : 0;
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
                step="100"
                ref={speed}
                onChange={onSpeedChange}
                disabled={boardModel.status === Status.IN_PROGRESS}
            />
            <p>{getSpeed()} ms</p>
        </div>
    )
}