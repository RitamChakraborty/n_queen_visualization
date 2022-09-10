import Queens from "../model/Queens";
import {createContext, ReactNode, useEffect, useState} from "react";
import {getValueFromLocalStorage, setValueInLocalStorage} from "../service/LocalStorageService";

export type LocalStorageModel = {
    queens: Queens;
    speed: number;
    setQueens: (queen: Queens) => void;
    setSpeed: (speed: number) => void;
}

export const LocalStorageContext = createContext<LocalStorageModel | null>(null);

type LocalStorageProviderProps = {
    children: ReactNode
}

export function LocalStorageProvider(props: LocalStorageProviderProps) {
    const [queens, setQueens] = useState<Queens>(Queens.FOUR_QUEENS);
    const [speed, setSpeed] = useState<number>(0);

    useEffect(() => {
        const localStorageQueensValue = getValueFromLocalStorage("QUEENS");

        if (localStorageQueensValue === null) {
            setValueInLocalStorage("QUEENS", Queens.FOUR_QUEENS.toString());
            setQueens(Queens.FOUR_QUEENS);
        } else {
            const queensValue = parseInt(localStorageQueensValue);

            switch (queensValue) {
                case Queens.FOUR_QUEENS: {
                    setQueens(Queens.FOUR_QUEENS);
                    break;
                }
                case Queens.EIGHT_QUEENS: {
                    setQueens(Queens.EIGHT_QUEENS);
                    break;
                }
            }
        }
    }, []);

    function setQueensInLocalStorage(q: Queens) {
        setQueens(q);
        setValueInLocalStorage("QUEENS", q.toString());
    }

    return (
        <LocalStorageContext.Provider
            value={{
                queens: queens,
                speed: speed,
                setQueens: setQueensInLocalStorage,
                setSpeed: setSpeed
            }}
        >
            {props.children}
        </LocalStorageContext.Provider>
    )
}