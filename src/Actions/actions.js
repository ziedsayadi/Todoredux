import {ADD_TODO} from "./actionsexp"
import {REMOVE , COMPLET , EDIT} from "./actionsexp"


export  function addtodo (text){
    return {type:ADD_TODO , text} 
    
}
export function remove (i){
    return {type:REMOVE , i}
}

export function complet (i){
    return {type:COMPLET , i}
}
export function edit (i){
    return {type:EDIT , i}
}