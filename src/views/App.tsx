import './App.css';
import Board from "../components/board/Board";
import {useContext, useRef} from "react";
import {BoardContext} from "../contexts/BoardContext";

export default function App() {
    const queens = useRef<HTMLSelectElement>(null);
    const boardModel = useContext(BoardContext)!;

    function onQueensChange() {
    }

    function getSelectedQueens(): number {
        return parseInt(queens!.current!.value);
    }

    function initializeSelectedQueens() {
        if (!queens!.current!.value) {
            queens!.current!.value = "4";
        }
    }

    function start() {
        initializeSelectedQueens();
        const queens = getSelectedQueens();
        boardModel.start(queens);
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
                    >
                        <option value="4">4 Queens</option>
                        <option value="8">8 Queens</option>
                    </select>
                    <button onClick={start}>Start</button>
                </nav>
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