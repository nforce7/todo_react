import TodoItem from "../TodoItem/TodoItem";

function TodoList({todos}) {   //to je prop kojeg ćemo od nekog dobiti. Treba iterirati kroz todovoe i generirati todo iteme 
    return(
        <ul>
            {todos.map((todo) => <TodoItem todo={todo}/>)}    {/* //UVIJEK UVIJEK ako generiramo kroz množinu (array), onda unutar callback imamo jedninu!!! on mora vratiti todo item za svaki todo*/}
        </ul>
    )
}

export default TodoList;