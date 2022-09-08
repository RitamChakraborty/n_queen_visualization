import {createContext, ReactNode, useEffect, useState} from "react";

type BoardProviderProps = {
    children: ReactNode;
}

type BoardModel = {
    board: any[];
    start: (n: number) => void;
}

export const BoardContext = createContext<BoardModel | null>(null);

export function BoardProvider(props: BoardProviderProps) {
    const [board, setBoard] = useState<any[]>([]);
    const [solutions, setSolutions] = useState<number>(0);

    let n = 0;
    let b: any[] = [];
    let leftRow: boolean[] = [];
    let upperDiagonal: boolean[] = [];
    let lowerDiagonal: boolean[] = [];
    let result: any[] = [];

    useEffect(() => {
        console.log(board);
    }, [board]);

    useEffect(() => {
        console.log("Solutions : ", solutions);
    }, [solutions]);

    async function start(order: number) {
        n = order
        leftRow = [];
        upperDiagonal = [];
        lowerDiagonal = [];
        result = [];

        for (let i = 0; i < n; ++i) {
            let temp = [];
            for (let j = 0; j < n; ++j) {
                temp.push(0);
            }
            b.push(temp);
            leftRow.push(false);
        }

        for (let i = 0; i < 2 * n - 1; ++i) {
            upperDiagonal.push(false);
            lowerDiagonal.push(false);
        }

        setBoard(b);
        await solve(0);
    }

    function delay(timeInMills: number) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('resolve');
            }, timeInMills);
        });
    }

    async function solve(col: number) {
        if (col === n) {
            const temp1 = [];

            for (let i = 0; i < n; ++i) {
                const temp2 = [];

                for (let j = 0; j < n; ++j) {
                    temp2.push(b[i][j]);
                }
                temp1.push(temp2);
            }

            result.push(temp1);
            setSolutions((value) => value + 1);
            console.log(result)

            return;
        }

        for (let row = 0; row < n; ++row) {
            if (
                !leftRow[row] &&
                !lowerDiagonal[row + col] &&
                !upperDiagonal[n - 1 + col - row]
            ) {
                b[row][col] = 1;
                leftRow[row] = true;
                lowerDiagonal[row + col] = true;
                upperDiagonal[n - 1 + col - row] = true;

                setBoard([b]);

                await delay(1000);
                await solve(col + 1);

                b[row][col] = 0;
                leftRow[row] = false;
                lowerDiagonal[row + col] = false;
                upperDiagonal[n - 1 + col - row] = false;
            }
        }
    }

    return (
        <BoardContext.Provider value={{
            board: board,
            start: start
        }}>
            {props.children}
        </BoardContext.Provider>
    );
}