import './App.css';
import React, { startTransition } from 'react';   //jer smo App pretvorili u klasu
import FormInput from './FormInput/FormInput';  // ovo importamo jer react baca gresku
import TodoList from './TodoList/TodoList';
import { TodoType, VisibilityType } from './utilities/constants';
import VisibiltyToolbar from './VisibilityToolbar/VisibilityToolbar';
import { Button } from 'react-bootstrap';


class App extends React.Component {
  
  state = {
     todos:[],        //izvor istine
     visibility: VisibilityType.ALL
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

   handleVisibilityChange = (type) =>{    //ovo je vezano za 3 gumbića
      this.setState({visibility: type});
   }

   getVisibleTodos = () => {    //ovo je za 3 gumbića. Vraća vidljive / filtrirane todoove
       const {visibility, todos } = this.state;    //destrukturiramo

       if(visibility === VisibilityType.ACTIVE) {

        return todos.filter((todo) => !todo.completed)    // filtriramo sve osim onih koji nisu prekriženih

       } else if(visibility === VisibilityType.COMPLETED) {
        return todos.filter((todo) => todo.completed)
       } else {
          return todos;
       }
   }

   handleRemoveCompleted = () => {    //to je za donji gumbić
    const newTodos = this.state.todos.filter((todo) => !todo.completed);
    this.setState({todos: newTodos});
   }

  render(){
      const visibleTodos = this.getVisibleTodos();
      /* const hasCompletedTodos = this.state.todos.filter(todo => todo.completed). length >=1 ; */    //ovo je za donji gumbić. vrača completani todo i gleda duljinu niza  da li je veća ili jednaka 1
      const hasCompletedTodos = this.state.todos.find((todo) => todo.completed);

    return (
      <div className='app'>
        <VisibiltyToolbar onVisibilityChange={this.handleVisibilityChange} />
      <FormInput handleFormSubmit={this.handleNewTodo} />
      <TodoList todos={visibleTodos} onTodoChange={this.handleTodoChange} />  {/* //ovo je zapravo lista todoova */} {/* //ovo je polaznisma tocka ontodochange */}
      { hasCompletedTodos && <Button onClick={this.handleRemoveCompleted}>Clear completed</Button> }
      </div>
    );
  }
  
}

export default App;
