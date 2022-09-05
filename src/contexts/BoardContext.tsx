import {createContext} from "react";

type BoardProviderType = {
    children: any[];
}

export const BoardContext = createContext([]);

export function BoardProvider(props: BoardProviderType) {
    return (
        <BoardContext.Provider value={[]}>
            {props.children}
        </BoardContext.Provider>
    );
}