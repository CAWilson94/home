import React, { useState } from "react";

interface Item {
  id: number;
  text: string;
  completed: boolean;
}

export const TodoPractise: React.FC = () => {
  const [todos, setTodo] = useState<Item[]>([
    { id: 1, text: "first todo", completed: false },
    { id: 2, text: "second todo", completed: false },
    { id: 3, text: "third todo", completed: false },
  ]);
  const [input, setInput] = useState<string>("");

  const handleClickNewTodo = () => {
    // add a new todo item to the list
    console.log("clicked a new todo!", input);
    setTodo([...todos, { id: Date.now(), text: input, completed: false }]);
  };

  const handleToggleTodo = (id: number) => {
    setTodo(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  return (
    <div className="main-container">
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <div className="input-section">
        <input
          type="text"
          placeholder="Input a todo"
          className="items"
          onChange={(e) => {
            setInput(e.currentTarget.value);
          }}
        ></input>
        <button className="items" onClick={handleClickNewTodo}>
          Add
        </button>
      </div>
    </div>
  );
};

/**
 * Aim
 *
 * List out the todos you have currently
 */
