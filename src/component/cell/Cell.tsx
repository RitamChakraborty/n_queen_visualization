import './Cell.css';

type CellProps = {
    value: number
}

export default function Cell(props: CellProps) {
    function getCellValue(): string {
        if (props.value === 1) {
            return "👸";
        } else {
            return "⬜️";
        }
    }

    return (
        <span id="cell">
            <span>{getCellValue()}</span>
        </span>
    );
}