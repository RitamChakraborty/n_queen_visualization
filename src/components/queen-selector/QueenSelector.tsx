import {BoardContext, BoardModel, Status} from "../../contexts/BoardContext";
import {useContext, useState} from "react";
import "./QueenSelector.css";

enum Queens {
    FOUR_QUEENS = 4,
    EIGHT_QUEENS = 8
}

export default function QueenSelector() {
    const boardModel: BoardModel = useContext(BoardContext)!;
    const [queens, setQueens] = useState<Queens>(Queens.FOUR_QUEENS);

    function onQueensSelectionChange(queens: Queens) {
        setQueens(queens);
        boardModel.setQueens(queens.valueOf());
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