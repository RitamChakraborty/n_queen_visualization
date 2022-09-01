import Cell from "../cell/Cell";
import "./Board.css";

type BoardProps = {
    board: any[]
}

export default function Board(props: BoardProps) {
    return (
        <div
            id="board"
            style={{
                gridTemplateColumns: `repeat(${props.board.length}, 1fr)`
            }}
        >
            {
                props.board.map((row: any, i: number) => {
                    return row.map((col: any, j: number) => {
                        let value: number = col as number;
                        return <Cell
                            key={`${i}${j}`}
                            index={parseInt(`${i}${j}`)}
                            value={value}
                        />
                    });
                })
            }
        </div>
    );
}