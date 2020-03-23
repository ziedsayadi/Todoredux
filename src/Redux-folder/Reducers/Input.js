const inputReducer=(state="" , action)=>{
    if (action.type==="INPUT"){
        return {state :action.userinput.target.value}
       
    } else  return state
}
export default inputReducer