const isCompletReducer=(state=[] , action)=>{
    if (action.type==="ISCOMPLET"){
        return [...state.map((el,i)=>(action.index===i )?{...el, complete : !el.complete}: el)]

       
    } else  return state
}
export default isCompletReducer
