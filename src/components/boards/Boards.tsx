import Board from "../board/Board";
import {BoardContext, BoardModel} from "../../contexts/BoardContext";
import {useContext} from "react";
import "./Boards.css";

export default function Boards() {
    const boardModel: BoardModel = useContext(BoardContext)!;

    return (
        <div id="Boards">
            {
                boardModel.board.map((board: any[], i: number) => {
                    return <Board key={`${i}`} board={board}/>
                })
            }
        </div>
    );
}