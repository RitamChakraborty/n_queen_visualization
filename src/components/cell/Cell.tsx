import './Cell.css';
import whiteQueen from "../../assets/white-queen.svg";
import blackQueen from "../../assets/black-queen.svg";

type CellProps = {
    index: number;
    value: number;
}

enum CellColor {
    BLACK,
    WHITE
}

export default function Cell(props: CellProps) {
    function getCellColor(): CellColor {
        if (Math.floor(props.index / 10) % 2 == 0)
            return props.index % 2 == 0 ? CellColor.BLACK : CellColor.WHITE;
        return props.index % 2 == 0 ? CellColor.WHITE : CellColor.BLACK;
    }

    function getQueen(): string {
        switch (getCellColor()) {
            case CellColor.WHITE:
                return blackQueen;
            case CellColor.BLACK:
                return whiteQueen;
        }
    }

    function getCellValue() {
        if (props.value === 1)
            return <img src={getQueen()} alt="queen"/>;
        return <></>;
    }

    function getCellBackgroundColor() {
        switch (getCellColor()) {
            case CellColor.WHITE:
                return 'var(--light-background-color)';
            case CellColor.BLACK:
                return 'var(--dark-background-color)';
        }
    }

    return (
        <div
            id="cell"
            style={{
                backgroundColor: getCellBackgroundColor()
            }}
        >
            <div className="queen">
                {getCellValue()}
            </div>
        </div>
    );
}