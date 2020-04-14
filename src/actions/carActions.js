export const REMOVE_ITEM = "REMOVE_ITEM";
export const ADDING_ITEM = "ADDING_ITEM";

export function removeItem(item){
    return{
        type: REMOVE_ITEM,
        payload: item
    }
}

export function addingItem(item){
    return{
        type: ADDING_ITEM,
        payload: item
    }
}
