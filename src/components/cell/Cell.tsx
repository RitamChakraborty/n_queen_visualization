import './Cell.css';

type CellProps = {
    index: number;
    value: number;
}

export default function Cell(props: CellProps) {
    function getCellValue(): string {
        if (props.value === 1) {
            return "👸";
        } else {
            return " ";
        }
    }

    function getCellBackgroundColor(): string {
        if (Math.floor(props.index / 10) % 2 == 0) {
            return props.index % 2 == 0 ? 'black' : 'white';
        } else {
            return props.index % 2 == 0 ? 'white' : 'black';
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