import Button from 'react-bootstrap/Button';
import { TodoType } from '../utilities/constants';
import styles from './TodoItem.module.css';


function TodoItem({todo, onTodoChange}) {


   function handleChange() {
    onTodoChange(todo.id, TodoType.TOGGLE_COMPLETED);   //ontodochange je prop koji smo prosljedili u todoitem. ovaj todotype.Toggle smo napisali da tu ne piše string, ali to je zapravo string(poveznica je u constants.js)
   }


   function handleClick() {
    onTodoChange(todo.id, TodoType.DELETE);    //ontodochange je prop koji smo prosljedili u todoitem

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