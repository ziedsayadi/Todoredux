import {ADD_TODO} from "./actionsexp"
import {REMOVE , COMPLET , EDIT, CHANGE} from "./actionsexp"


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
export function change (text,i){
    return {type:CHANGE , text, i}
}