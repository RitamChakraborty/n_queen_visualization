import {createContext, ReactNode, useState} from "react";

type BoardProviderProps = {
    children: ReactNode;
}

type BoardModel = {
    board: any[];
    solutions: number;
    speed: number;
    start: (n: number) => void;
    setSpeed: (speed: number) => void;
    reset: () => void;
}

export const BoardContext = createContext<BoardModel | null>(null);

export function BoardProvider(props: BoardProviderProps) {
    const [board, setBoard] = useState<any[]>([]);
    const [solutions, setSolutions] = useState<number>(0);
    const [delayInMills, setDelayInMills] = useState<number>(0);

    let n = 0;
    let b: any[] = [];
    let leftRow: boolean[] = [];
    let upperDiagonal: boolean[] = [];
    let lowerDiagonal: boolean[] = [];

    function createEmptyBoard(): any[] {
        let arr = [];

        for (let i = 0; i < n; ++i) {
            let temp = [];
            for (let j = 0; j < n; ++j) {
                temp.push(0);
            }
            arr.push(temp);
        }

        return arr;
    }

    function resetBoard() {
        setBoard([]);
        setSolutions(0);
    }

    async function onSpeedChange(speed: number) {
        setDelayInMills(speed);
    }

    async function start(order: number) {
        n = order
        leftRow = [];
        upperDiagonal = [];
        lowerDiagonal = [];
        b = createEmptyBoard();

        for (let i = 0; i < n; ++i) {
            leftRow.push(false);
        }

        for (let i = 0; i < 2 * n - 1; ++i) {
            upperDiagonal.push(false);
            lowerDiagonal.push(false);
        }

        setBoard([b]);
        await solve(0);
        setBoard((value) => {
            return value.slice(0, solutions - 1);
        })
    }

    function pause() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('resolve');
            }, delayInMills);
        });
    }

    async function solve(col: number) {
        if (col === n) {
            setBoard((value) => {
                const oldValues: any[] = [];
                const newValue: any[] = [];

                if (value.length > 1) {
                    for (let i = 0; i < value.length - 1; ++i) {
                        const oldValue = [];
                        for (let j = 0; j < n; ++j) {
                            const temp = [];

                            for (let k = 0; k < n; ++k) {
                                temp.push(value[i][j][k]);
                            }

                            oldValue.push(temp);
                        }
                        oldValues.push(oldValue);
                    }
                }

                for (let i = 0; i < n; ++i) {
                    const temp = [];

                    for (let j = 0; j < n; ++j) {
                        temp.push(b[i][j]);
                    }
                    newValue.push(temp);
                }

                return value.length > 1
                    ? [...oldValues, newValue, createEmptyBoard()]
                    : [newValue, createEmptyBoard()];
            })
            setSolutions((value) => value + 1);
            await pause();

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

                setBoard((value) => {
                    return [...value.slice(0, value.length - 1), b];
                });

                await pause();
                await solve(col + 1);

                b[row][col] = 0;
                leftRow[row] = false;
                lowerDiagonal[row + col] = false;
                upperDiagonal[n - 1 + col - row] = false;

                setBoard((value) => {
                    return [...value.slice(0, value.length - 1), b];
                });

                await pause();
            } else {
                b[row][col] = 1;
                setBoard((value) => {
                    return [...value.slice(0, value.length - 1), b];
                });
                await pause();
                b[row][col] = 0;
                setBoard((value) => {
                    return [...value.slice(0, value.length - 1), b];
                });
            }
        }
    }

    return (
        <BoardContext.Provider value={{
            board: board,
            solutions: solutions,
            speed: delayInMills,
            start: start,
            setSpeed: onSpeedChange,
            reset: resetBoard,
        }}>
            {props.children}
        </BoardContext.Provider>
    );
}