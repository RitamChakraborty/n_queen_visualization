import Button from "../button/Button";
import {BoardContext, Status} from "../../contexts/BoardContext";
import {useContext} from "react";
import "./Buttons.css";

export default function Buttons() {
    const boardModel = useContext(BoardContext)!;

    function start() {
        boardModel.start();
    }

    function reset() {
        location.reload();
    }

    return (
        <div id="Buttons">
            <Button
                title="Start"
                onClick={start}
                disabled={boardModel.status === Status.IN_PROGRESS}
            />
            <Button title="Reset" onClick={reset} disabled={false}/>
        </div>
    )
}