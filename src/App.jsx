import './App.css';
import React, { startTransition } from 'react';   //jer smo App pretvorili u klasu
import FormInput from './FormInput/FormInput';  // ovo importamo jer react baca gresku
import TodoList from './TodoList/TodoList';


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
   handleTodoCompletedChange = (id, type) => {

      let newTodos =null;
      if (type === "TOGGLE_COMPLETED"){
        newTodos = this.state.todos.map((todo) => {
          if (todo.id===id) {
              return {...todo, completed: !todo.completed}   //toggle naizmjence promjena completed stanja
          } else{
            return todo;
          }
      })

      }
      else if (type==="DELETE") {
        
      }

    
    this.setState({todos: newTodos});
   }

  render(){
    return (
      <div className='app'>
      <FormInput handleFormSubmit={this.handleNewTodo} />
      <TodoList todos={this.state.todos} onTodoChange={this.handleTodoCompletedChange} />  {/* //ovo je zapravo lista todoova */} 
      </div>
    );
  }
  
}

export default App;
