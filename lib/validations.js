import { firstNonAllowedSymbol, nameContainsOnlyAlowedSymbols } from "./helpers.js";

export function isName(name) {
    let errorMessage = '';

    const nameMinSize = 2;
    const nameMaxSize = 20;
    const allowedAbcName = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (typeof name !== 'string') {
        errorMessage = 'no name'
    } else if (name.trim().length < nameMinSize) {
        errorMessage = 'name is too short'
    } else if (name.length > nameMaxSize) {
        errorMessage = 'name is too long'
    } else if (!nameContainsOnlyAlowedSymbols(name, allowedAbcName)) {
        errorMessage = `not allowed symbol in name ${firstNonAllowedSymbol(name, allowedAbcName)}`
    } else if (name[0].toUpperCase() !== name[0]) {
        errorMessage = 'name first letter needs to be upper case'
    }
    return errorMessage;
}