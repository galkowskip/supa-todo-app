import { createClient } from '@supabase/supabase-js';
import React, { useEffect } from 'react';

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL as string,
  process.env.REACT_APP_SUPABASE_KEY as string
);

interface Todo {
  id: string;
  created_at: string;
  title: string;
  description: string;
  isCompleted: boolean;
  deadline: string;
}

const getTodos = async () => {
  const { data, error } = await supabase.from('todos').select('title')

  if (error) {
    console.error(error);
    return [] as Todo[];
  }

  return data as Todo[];
};

function App() {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodoData = async () => {
      const newTodos = await getTodos();
      setTodos(newTodos);
    };

    fetchTodoData();
  }, []);

  return (
    <div className="App">
      <pre>
        {todos.map((todo) => (
          <div key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <p>{todo.deadline}</p>
            <p>{todo.isCompleted ? 'Completed' : 'Not Completed'}</p>
          </div>
        ))}
      </pre>
    </div>
  );
}

export default App;
