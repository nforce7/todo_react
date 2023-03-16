import './App.css';
import React from 'react';   //jer smo App pretvorili u klasu
import FormInput from './FormInput/FormInput';  // ovo importamo jer react baca gresku
import TodoList from './TodoList/TodoList';


class App extends React.Component {
  
  state = {
     todos:[]
  }
  
  render(){
    return (
      <div className='app'>
      <FormInput />
      <TodoList todos={this.todos}/>  //ovo je zapravo lista todoova 
      </div>
    );
  }
  
}

export default App;
