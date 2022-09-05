export default class NQueenService {
    private board: any[] = [];
    private leftRow: boolean[] = [];
    private upperDiagonal: boolean[] = [];
    private lowerDiagonal: boolean[] = [];
    private result: any[] = [];

    constructor(
        private n: number
    ) {
        for (let i = 0; i < n; ++i) {
            let temp = [];
            for (let j = 0; j < n; ++j) {
                temp.push(0);
            }
            this.board.push(temp);
            this.leftRow.push(false);
        }

        for (let i = 0; i < 2 * n - 1; ++i) {
            this.upperDiagonal.push(false);
            this.lowerDiagonal.push(false);
        }
    }

    getPositions(): any[] {
        this.solve(0);
        return this.result;
    }

    private solve(col: number) {
        if (col === this.n) {
            const temp1 = [];

            for (let i = 0; i < this.n; ++i) {
                const temp2 = [];

                for (let j = 0; j < this.n; ++j) {
                    temp2.push(this.board[i][j]);
                }
                temp1.push(temp2);
            }

            this.result.push(temp1);
            return;
        }

        for (let row = 0; row < this.n; ++row) {
            if (
                !this.leftRow[row] &&
                !this.lowerDiagonal[row + col] &&
                !this.upperDiagonal[this.n - 1 + col - row]
            ) {
                this.board[row][col] = 1;
                this.leftRow[row] = true;
                this.lowerDiagonal[row + col] = true;
                this.upperDiagonal[this.n - 1 + col - row] = true;

                this.solve(col + 1);

                this.board[row][col] = 0;
                this.leftRow[row] = false;
                this.lowerDiagonal[row + col] = false;
                this.upperDiagonal[this.n - 1 + col - row] = false;
            }
        }
    }
}