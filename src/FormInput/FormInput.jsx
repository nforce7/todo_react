import styles from './FormInput.module.css';
import Button from 'react-bootstrap/Button';
import { nanoid } from 'nanoid';
import {useState} from 'react';

function FormInput ({handleFormSubmit}) {


    const [textValue, setTextValue] = useState('');

    function handleSubmit(e) {   //e je event. Treba ga prosljediti u funkciji ili se vs code buni da je e not defined
        e.preventDefault(); 

        if (textValue.trim() ==="") {
            return
        };

        const todo = {id: nanoid() , text : textValue, completed: false};   //nanoid je iz npm install za unique key
        handleFormSubmit(todo); 
        setTextValue("");  // handleFormSubmit je prop
    }

    function handleChange(e) {
        const value =e.target.value;
        setTextValue(value);
    }




    return (
        <form onSubmit={handleSubmit} >
            <div className={styles.form}>
                <input autoFocus={true} type="text" value={textValue} onChange={handleChange}/>
                <Button type="submit">Add</Button>  {/* veliko slovo na Button jer smo tako importali iz Bootstrapa prema njihovoj dok. */}
            </div>
         
        </form>
    )
}

export default FormInput;