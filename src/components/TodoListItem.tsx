import type { Todo } from '../types/todo';

export default function TodoListItem({ todo }: { todo: Todo }) {
    return (
        <div>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
        </div>
    );
}