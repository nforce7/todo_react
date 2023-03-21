import './App.css';
import React, { startTransition } from 'react';   //jer smo App pretvorili u klasu
import FormInput from './FormInput/FormInput';  // ovo importamo jer react baca gresku
import TodoList from './TodoList/TodoList';
import { TodoType } from './utilities/constants';


class App extends React.Component {
  
  state = {
     todos:[]        //izvor istine
  }
  
     //dodati prosljeđeni newTodo u listu trenutnih todos -ova
   handleNewTodo = (newTodo) => {
   /*    const newTodos=[...this.state.todos]; //moram napraviti novi array jer ne smije mjenjati postojeći todos array
      newTodos.push(newTodo); */

      /* ili mogu skratiti  */
      const newTodos = [...this.state.todos, newTodo];
      this.setState({todos : newTodos})
   }

     // updejtati todos sa promjenamau stanju dovršenosti pojedinog todo-a
   handleTodoChange = (id, type) => {
    const {todos} = this.state;  //destrukturiramo

      let newTodos =null;
      if (type === TodoType.TOGGLE_COMPLETED){
        newTodos = todos.map((todo) => {
          if (todo.id===id) {
              return {...todo, completed: !todo.completed}   //toggle naizmjence promjena completed stanja
          } else{
            return todo;
          }
      })

      }
      else if (type===TodoType.DELETE) {
        newTodos = todos.filter((todo) => todo.id !==id );    //todo.id je različit od id

      }

    
    this.setState({todos: newTodos});
   }

  render(){
    return (
      <div className='app'>
      <FormInput handleFormSubmit={this.handleNewTodo} />
      <TodoList todos={this.state.todos} onTodoChange={this.handleTodoChange} />  {/* //ovo je zapravo lista todoova */} {/* //ovo je polaznisma tocka ontodochange */}
      </div>
    );
  }
  
}

export default App;
