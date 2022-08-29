import NQueenService from "./service/n-queen-service";
import './App.css';
import {useRef} from "react";

export default function App() {
    const queens = useRef<HTMLSelectElement>(null);

    function handle() {
        const nQueenService = new NQueenService(8);
        const positions = nQueenService.getPositions()
        console.log(positions);
    }

    function onQueensChange() {
    }

    function getSelectedQueens(): number {
        return parseInt(queens!.current!.value);
    }

    function start() {
        if (!queens!.current!.value) {
            queens!.current!.value = "4";
        }

        console.log(getSelectedQueens());
    }

    return (
        <>
            <div className="container">
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
            </div>
        </>
    );
}