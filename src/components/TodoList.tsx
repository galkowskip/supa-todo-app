import type { Todo } from '../types/todo';

import TodoListItem from './TodoListItem';

function TodoList({todos}: {todos: Todo[]}) {
    return (
        <div>
            {todos.map((todo) => (
                <TodoListItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
}

export default TodoList;