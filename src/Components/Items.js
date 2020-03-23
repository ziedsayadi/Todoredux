import React from 'react'
import {connect} from "react-redux"
import {useSelector,useDispatch} from "react-redux"
import {input,isComplet,remove,todolist} from "../Redux-folder/Action"


 function Items  ()  {
     
    const userText = useSelector=(state=>state.userText);
    const toDoList = useSelector=(state=>state.toDoList);
    const delet = useSelector=(state=>state.delet);
    const Complet = useSelector=(state=>state.Complet);
    
    const dispatch = useDispatch()


    /*
        
        state={
            todolist:[]
        };
    
    addto= (el) =>{
        this.setState({
            todolist: [...this.state.todolist, el],

        
          });

    }
    completedtask= (e) =>{
        this.setState({
            completed:[...this.state.todolist.map((el,i)=> i === e ? el.completed = !el.completed : el.completed)]





        
        })
    }
    
     remove = (e) =>{
    
         this.setState({
             todolist: this.state.todolist.filter((el,i)=> e !== i)})


     }

    */

 

   // render() {
       
        return (
            <>
            <div className="card card-body m-3">
                <from>
                    <div className="input-group">
                        <div className="input-group-prepend">
                        <div className="input-group-prepend-text bg-primary text-white">
                            <i className="fas fa-book p-2"></i>
                        </div>
                        </div>
                        <input type="text" className="form-control text-capitalize" value={userText} placeholder="put you shit here !!!" onChange={(userinput)=>input(userinput)}></input>
                    </div>
                    <button type="submit" onClick={todolist()} className="btn btn-block btn-primary mt-2">Add</button>
                </from>
            </div>

            <ul className="list-group mt-4">
                <h3 className="text-capitalize text-center">to do list</h3>
                {toDoList.map((el,i)=>
            <li  className="list-group-items text-capitalize d-flex justify-content-between my-2" key={i}>
                    <h6 style={{textDecoration : el.complete ? "line-through":""}}>{el.text}</h6>
                    <div className="todo-icon">
                        <span onClick={(index)=>isComplet(index)} className="mx-2 text-success">
                            <i className="fas fa-pen"></i>
                        </span>
                        <span onClick={(index)=>remove(index)} className="mx-2 text-danger">
                            <i className="fas fa-trash"></i>
                        </span>
                    </div>
                      </li>)}

            </ul>

            </>

           /* <div >
                 <div className="todo">
                <h1>To-Do-App</h1>
                <form onSubmit={this.Submit}>
                    <label>Add new to-do </label>
                    <input type="text" value={this.state.enterTask}  className="newtask"onChange={this.Change} ></input>
                    <button className="add"  type="button" onClick={(el)=>this.Submit(el)}>Add</button>
                </form>                
            </div>
                {this.state.todolist.map( (tab,i) =>(<div className="element" objet={tab.m}><h1 className={tab.completed? "complete":"undo"}> {tab.zone}</h1>
                <div className="Btn">
                <button className="button-1"  type='button' onClick={()=>this.completedtask(i)}>{tab.completed ? 'complete':'undo'} </button>
                <button className="button-2"  type='button' onClick={()=>this.remove(i)}>remove </button>
                </div>
                </div>)
                )}



                
            </div>*/
        )
    }
//}

/*const mapStateToProps = state => 
     ({
      userText: state.userText,
      toDoList: state. toDoList,
      delet : state.delet,
      Complet : state.Complet
     
    })
  
  const mapDispatchToProps = dispatch => {
    return {
        input: userinput => {
        dispatch(input(userinput));
      },
      todolist: () => {
        dispatch(todolist());
      },
      isComplet: () => {
        dispatch(isComplet());
      },
      remove: () => {
        dispatch(remove());
      },

    };
  };*/

export default connect()(Items);