const removeReducer=(state=[] , action)=>{
    if (action.type==="REMOVE"){
         return [...state.filter((el,i)=>action.index!==i)]
       
    } else  return state
}
export default removeReducer