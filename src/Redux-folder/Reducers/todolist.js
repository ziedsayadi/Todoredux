const toDoReducer=(state=[] , action)=>{
    if (action.type==="ADD"){
        return [...state,{
            text:action.text,
            complete:false
        }
    ]
       
    } else  return state
}
export default toDoReducer