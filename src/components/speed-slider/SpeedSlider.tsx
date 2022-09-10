import {BoardContext, BoardModel, Status} from "../../contexts/BoardContext";
import {ChangeEvent, useContext} from "react";
import "./SpeedSlider.css";
import {LocalStorageContext, LocalStorageModel} from "../../contexts/LocalStorageContext";

export default function SpeedSlider() {
    const boardModel: BoardModel = useContext(BoardContext)!;
    const localStorageModel: LocalStorageModel = useContext(LocalStorageContext)!;
    const speed = localStorageModel.speed;
    const setSpeed = localStorageModel.setSpeed;

    function onSpeedChange(e: ChangeEvent<HTMLInputElement>) {
        setSpeed(parseInt(e.target.value));
    }

    return (
        <div id="SpeedSlider">
            <input
                type="range"
                min={localStorageModel.minSpeed}
                max={localStorageModel.maxSpeed}
                step={localStorageModel.speedStep}
                value={speed}
                onChange={(e) => onSpeedChange(e)}
                disabled={boardModel.status === Status.IN_PROGRESS}
            />
            <p>{speed} ms</p>
        </div>
    )
}