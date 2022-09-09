import './App.css';
import Board from "../components/board/Board";
import {useContext, useEffect, useRef} from "react";
import {BoardContext, Status} from "../contexts/BoardContext";

export default function App() {
    const queens = useRef<HTMLSelectElement>(null);
    const speed = useRef<HTMLInputElement>(null);
    const boardModel = useContext(BoardContext)!;

    // On Mount
    useEffect(() => {
        if (!queens!.current!.value) {
            queens!.current!.value = "4";
        }
        boardModel.setSpeed(getSpeed());
    });

    function onQueensChange() {
        boardModel.reset();
    }

    function getSelectedQueens(): number {
        return parseInt(queens!.current!.value);
    }

    function start() {
        const queens = getSelectedQueens();
        boardModel.start(queens);
    }

    function getSpeed(): number {
        return parseInt(speed!.current!.value);
    }

    function onSpeedChange() {
        boardModel.setSpeed(getSpeed());
    }

    return (
        <div id="Home">
            <div className="container">
                <nav>
                    <select
                        name="queens"
                        id="queens"
                        placeholder="Select number of queens"
                        ref={queens}
                        onChange={onQueensChange}
                        disabled={boardModel.status === Status.IN_PROGRESS}
                    >
                        <option value="4">4 Queens</option>
                        <option value="8">8 Queens</option>
                    </select>
                    <button
                        onClick={start}
                        disabled={boardModel.status === Status.IN_PROGRESS}
                    >Start
                    </button>
                    <input
                        type="range"
                        name="speed"
                        id="speed"
                        max="2000"
                        min="0"
                        defaultValue="2000"
                        ref={speed}
                        onChange={onSpeedChange}
                        disabled={boardModel.status === Status.IN_PROGRESS}
                    />
                </nav>
                <div className="solutions">Solutions : {boardModel.solutions}</div>
                <div className="boards">
                    {
                        boardModel.board.map((board: any[], i: number) => {
                            return <Board key={`${i}`} board={board}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
}