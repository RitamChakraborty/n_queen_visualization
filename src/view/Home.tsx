import './Home.css';
import Board from "../component/board/Board";
import {useRef, useState} from "react";
import NQueenService from "../service/n-queen-service";

export default function Home() {
    const queens = useRef<HTMLSelectElement>(null);
    const [boards, setBoards] = useState<any[]>([]);

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
        const nQueenService = new NQueenService(queens);
        const positions = nQueenService.getPositions()
        console.log(positions);
        setBoards(positions);
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
                        boards.map((board: any[], i: number) => {
                            return <Board key={`${i}`} board={board}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
}