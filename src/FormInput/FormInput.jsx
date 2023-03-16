import styles from './FormInput.module.css';
import Button from 'react-bootstrap/Button'

function FormInput () {


    function handleSubmit(e) {   //e je event. Treba ga prosljediti u funkciji ili se vs code buni da je e not defined
        e.preventDefault();
    }



    return (
        <form onSubmit={handleSubmit} >
            <div className={styles.form}>
                <input type="text" />
                <Button type="submit">Add</Button>  {/* veliko slovo na Button jer smo tako importali iz Bootstrapa prema njihovoj dok. */}
            </div>
         
        </form>
    )
}

export default FormInput;