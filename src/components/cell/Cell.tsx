import './Cell.css';

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

    function getCellValue(): string {
        if (props.value === 1) {
            return "👸";
        } else {
            return " ";
        }
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
            <span>{getCellValue()}</span>
        </div>
    );
}