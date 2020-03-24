import {ADD_TODO} from "./actionsexp"
import {REMOVE , COMPLET} from "./actionsexp"


export  function addtodo (text){
    return {type:ADD_TODO , text} 
    
}
export function remove (i){
    return {type:REMOVE , i}
}

export function complet (i){
    return {type:COMPLET , i}
}