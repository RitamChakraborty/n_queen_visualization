export default function App() {
    function getPositions(n: number) {
        let board: any[] = [];
        let leftRow: boolean[] = [];
        let upperDiagonal: boolean[] = [];
        let lowerDiagonal: boolean[] = [];
        let result = [];

        for (let i = 0; i < n; ++i) {
            let temp = [];
            for (let j = 0; j < n; ++j) {
                temp.push(0);
            }
            board.push(temp);
            leftRow.push(false);
        }

        for (let i = 0; i < 2 * n - 1; ++i) {
            upperDiagonal.push(false);
            lowerDiagonal.push(false);
        }

        function solve(column: number) {
            if (column === n) {
                console.log('answer', board);
                return;
            }

            for (let row = 0; row < n; ++row) {
                if (
                    !leftRow[row] &&
                    !lowerDiagonal[row + column] &&
                    !upperDiagonal[n - 1 + column - row]
                ) {
                    board[row][column] = 1;
                    leftRow[row] = true;
                    lowerDiagonal[row + column] = true;
                    upperDiagonal[n - 1 + column - row] = true;
                    console.log(board);

                    solve(column + 1);

                    board[row][column] = 0;
                    leftRow[row] = false;
                    lowerDiagonal[row + column] = false;
                    upperDiagonal[n - 1 + column - row] = false;
                }
            }
        }

        solve(0);
    }

    function getPositions1(n: number) {
        const col = new Set();
        const posDiag = new Set();
        const negDiag = new Set();
        const board = new Array(n);

        for (let i = 0; i < n; ++i) {
            board[i] = new Array(n).fill('.');
        }

        function solve(r: number) {
            if (r === n) {
                console.log(board);
                return;
            }

            for (let c = 0; c < n; c++) {
                if (
                    col.has(c) ||
                    posDiag.has(r + c) ||
                    negDiag.has(r - c)
                ) {
                    continue;
                }

                col.add(c);
                posDiag.add(r + c);
                negDiag.add(r - c);
                board[r][c] = 'Q';

                solve(r + 1);

                col.delete(c);
                posDiag.delete(r + c);
                negDiag.delete(r - c);
                board[r][c] = '.';
            }
        }

        solve(0);
    }

    function handle() {
        getPositions1(4);
    }

    return <>
        <h1>N Queen Visualization</h1>
        <button onClick={handle}>
            Solve
        </button>
    </>
}