import React,{Component} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Items from './Components/Items'

class App extends Component {

  render(){
  return (
    <div className="container" >
      <div className="row">
        <div className="col-8 max-auto col-md-6 mt-4">
        <h3 className="text-capitalize text-center">To Do App</h3>
         <Items />
        </div>
     </div>
    </div>
  );
  }
}

export default App;