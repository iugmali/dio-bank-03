import {UserData} from "../components/AppContext";

interface IDioBank {
    login: boolean;
    user: UserData | null;
}

const dioBank = {
    login: false,
    user: null
}

export const getAllLocalStorage = (): string | null  => {
    return localStorage.getItem('diobank')
}

export const createLocalStorage = (): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}

export const changeLocalStorage = (dioBank: IDioBank): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}
