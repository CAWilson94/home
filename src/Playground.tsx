export const Playground = () => {
  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  type TodoPreview = Pick<Todo, 'title'  | 'completed'>;

  const todo: TodoPreview = { 
    title: 'Clean room', 
    completed: false,
  }


  return (
    <div>
      {todo.completed} {todo.title}
    </div>
  );
};
