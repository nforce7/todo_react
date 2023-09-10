import { useState } from "react";

function NewUser({ onFormSubmit }) {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    function handleNameChange(event) {
        const value = event.target.value;
        setName(value);
    }

    function handleAgeChange(event) {
        const value = event.target.value;
        setAge(value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const id = new Date().getTime(); // Date.now();
        const newUser = { id: id, name: name, age: Number(age) };

        onFormSubmit(newUser);

        // brišemo inpute nakon submitanja forme
        setName('');
        setAge('');
    }

    function handleFormClear() {
        setName('');
        setAge('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Ime: <input value={name} onChange={handleNameChange} type="text" /></label>
            <label>Dob: <input value={age} onChange={handleAgeChange} type="number" min={0} max={120} /></label>
            <input type="submit" value="Unesi" />
            <button type="button" /* onClick={(e) => e.preventDefault()} */ onClick={handleFormClear}>Obriši</button>
        </form>
    )
}

export default NewUser;