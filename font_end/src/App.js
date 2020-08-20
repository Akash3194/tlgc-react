import React, { Component } from 'react';
import logo from './logo.svg';
import Index from './components/indexComponent'
import {BrowserRouter} from 'react-router-dom';
import Root from './components/RouteComponent';

class App extends Component {

  constructor(props){
    super(props);
  }
  

  render(){
  return (
    <BrowserRouter>
      <div>
        <Root/>
      </div>
    </BrowserRouter>
    
  );
  }
}

export default App;
