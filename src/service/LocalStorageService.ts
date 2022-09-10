export type LocalStorageKey = "QUEENS" | "SPEED";

export function setValueInLocalStorage(key: LocalStorageKey, value: string) {
    localStorage.setItem(key, value);
}

export function getValueFromLocalStorage(key: LocalStorageKey): string | null {
    return localStorage.getItem(key);
}