import {ADD_TODO} from "../Actions/actionsexp"
import {REMOVE , COMPLET} from "../Actions/actionsexp"
const globalState=[]

 function todoReducers(state=globalState , action){
     switch(action.type){
        case ADD_TODO  :
               
        return state.concat(action.text)

        case REMOVE :

        return state.filter((el)=>el.id !==action.i)

        case COMPLET :

        return state.map(el=>el.id==action.i ?{...el,completed:!el.completed}:el)

        default : 

             return state
     }
     
    
}
export default todoReducers