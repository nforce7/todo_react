import TodoItem from "../TodoItem/TodoItem";
import styles from './TodoList.module.css';

function TodoList({todos, onTodoChange}) {   //to je prop kojeg ćemo od nekog dobiti. Treba iterirati kroz todovoe i generirati todo iteme 
    return(
        <ul className={styles.list}>
            {todos.map((todo) => <TodoItem key={todo.id} todo={todo} onTodoChange={onTodoChange}/>)}    {/* //UVIJEK UVIJEK ako generiramo kroz množinu (array), onda unutar callback imamo jedninu!!! on mora vratiti todo item za svaki todo*/}
        </ul>
    )
}

export default TodoList; 