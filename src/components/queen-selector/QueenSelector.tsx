import {BoardContext, BoardModel} from "../../contexts/BoardContext";
import {useContext} from "react";
import "./QueenSelector.css";

export default function QueenSelector() {
    const boardModel: BoardModel = useContext(BoardContext)!;

    return (
        <div id="QueenSelector">
            <button>4 Queens</button>
            <button>8 Queens</button>
        </div>
    );
}