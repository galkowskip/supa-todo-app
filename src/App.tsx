import React, { useEffect } from 'react';
import { TodoService } from './services/todoService';

import type { Todo } from './types/todo';

import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodoData = async () => {
      const newTodos = await TodoService.getAll();
      setTodos(newTodos);
    };

    fetchTodoData();
  }, []);

  return (
    <div className="App">
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
