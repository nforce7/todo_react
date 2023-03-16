function TodoItem({todo}) {
    return(
        <li>
            <label>
                <input type="checkbox" />
                {}
            </label>
            <button type="button">X</button>
        </li>
    )
}

export default TodoItem;