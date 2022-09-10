import {BoardContext, BoardModel, Status} from "../../contexts/BoardContext";
import {useContext} from "react";
import "./QueenSelector.css";
import Queens from "../../model/Queens";
import {LocalStorageContext, LocalStorageModel} from "../../contexts/LocalStorageContext";

export default function QueenSelector() {
    const boardModel: BoardModel = useContext(BoardContext)!;
    const localStorageModel: LocalStorageModel = useContext(LocalStorageContext)!;
    const queens = localStorageModel.queens;
    const setQueens = localStorageModel.setQueens;

    function onQueensSelectionChange(queens: Queens) {
        setQueens(queens);
        boardModel.reset();
    }

    return (
        <div id="QueenSelector">
            <button
                className={`selector ${queens === Queens.FOUR_QUEENS ? "selected" : ""}`}
                disabled={boardModel.status === Status.IN_PROGRESS}
                onClick={() => onQueensSelectionChange(Queens.FOUR_QUEENS)}
            >
                <span>4 Queens</span>
            </button>
            <span>|</span>
            <button
                className={`selector ${queens === Queens.EIGHT_QUEENS ? "selected" : ""}`}
                disabled={boardModel.status === Status.IN_PROGRESS}
                onClick={() => onQueensSelectionChange(Queens.EIGHT_QUEENS)}
            >
                <span>8 Queens</span>
            </button>
        </div>
    );
}