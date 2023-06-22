import React, { useState } from "react";

interface Item {
  id: number;
  text: string;
  completed: boolean;
}

export const TodoList: React.FC = () => {
  const [todo, setToDo] = useState<Item[]>([
    { id: 1, text: "make coffee", completed: false },
    { id: 2, text: "be kind", completed: false },
    { id: 3, text: "have dinner", completed: false },
  ]);

  const [input, setInput] = useState<string>('');

  const handleToggle = (id: number) => {
    setToDo(
      todo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleClick = () => { 
    const newTodo: Item = { 
        id: Date.now(), text: input, completed: false
    }
    setToDo([...todo, newTodo])
  }

  return (
    <div className="main-container">
      <h1> TODO </h1>
      <ul>
        {todo.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggle(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Add a Todo" onChange={(e)=>setInput(e.currentTarget.value)}></input>
      <button onClick={handleClick}>Add</button>
    </div>
  );
};
