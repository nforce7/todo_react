import Button from 'react-bootstrap/Button';
import styles from './TodoItem.module.css';


function TodoItem({todo, onTodoChange}) {


   function handleChange() {
    onTodoChange(todo.id, "TOGGLE_COMPLETED");
   }


   function handleClick() {
    onTodoChange(todo.id, "DELETE");

   }

    return(
        <li className={styles.item}>
            <label className={todo.completed ? styles.checked : undefined}>
                <input type="checkbox" checked={todo.completed} onChange={handleChange} />
                <span className={styles.text}>{todo.text}</span>
            </label>
            <Button type="button" onClick={ handleClick }>X</Button>
        </li>
    )
}

export default TodoItem; 