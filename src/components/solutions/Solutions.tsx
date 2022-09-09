import {useContext} from "react";
import {BoardContext} from "../../contexts/BoardContext";
import "./Solutions.css";

export default function Solutions() {
    const boardModel = useContext(BoardContext)!;

    return (
        <div id="Solutions">Solutions : {boardModel.solutions}</div>
    )
}