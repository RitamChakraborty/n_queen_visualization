import './App.css';
import {useContext, useEffect, useRef} from "react";
import {BoardContext, Status} from "../contexts/BoardContext";
import Boards from "../components/boards/Boards";
import {QueenSelector} from "../components";

export default function App() {
    const speed = useRef<HTMLInputElement>(null);
    const boardModel = useContext(BoardContext)!;

    // On Mount
    useEffect(() => {
        boardModel.setSpeed(getSpeed());
    });

    function start() {
        boardModel.start();
    }

    function getSpeed(): number {
        return parseInt(speed!.current!.value);
    }

    function onSpeedChange() {
        boardModel.setSpeed(getSpeed());
    }

    function reset() {
        location.reload();
    }

    return (
        <div id="Home">
            <div className="container">
                <nav>
                    <QueenSelector/>
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
                    <span>{boardModel.speed}ms</span>
                    <button
                        onClick={start}
                        disabled={boardModel.status === Status.IN_PROGRESS}
                    >Start
                    </button>
                    <button
                        onClick={reset}
                    >
                        Reset
                    </button>
                </nav>
                <div className="solutions">Solutions : {boardModel.solutions}</div>
                <Boards/>
            </div>
        </div>
    );
}