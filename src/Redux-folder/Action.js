export  const input=(userinput)=>{
    return {
        type:'INPUT',
        userinput
    }
}

export  const todolist=(text)=>{
    return {
        type:'ADD',
        text,
        

    }
}
export  const remove=(index)=>{
    return {
        type:'REMOVE',
        index
    }
}

export  const isComplet=(index)=>{
    return {
        type:'ISCOMPLET',
        index
        
    }
}
