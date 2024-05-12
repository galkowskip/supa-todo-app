import { useEffect, useState } from "react";

import { TodoService } from "../services/TodoService";
import type { Todo } from "../types/todo";

import TodoList from "../components/TodoList";

function HomePage() {
    


    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const fetchTodoData = async () => {
            const newTodos = await TodoService.getAll();
            setTodos(newTodos);
        };

        fetchTodoData();
    }, []);

    return (
        <div>
            <h1>Todo List</h1>
            <TodoList todos={todos}/>
        </div>
    );
}

export default HomePage;