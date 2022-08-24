import NQueenService from "./service/n-queen-service";
import './App.css';
import {useRef} from "react";

export default function App() {
    const queens = useRef<HTMLSelectElement>();

    function handle() {
        const nQueenService = new NQueenService(8);
        const positions = nQueenService.getPositions()
        console.log(positions);
    }

    function onQueensChange() {
        console.log(queens);
    }

    const element = <>
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
        </div>
    </>;
}