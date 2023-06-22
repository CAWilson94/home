import React, { useState } from "react";

interface Item {
  id: number;
  text: string;
  completed: boolean;
}

const TodoPractise: React.FC = () => {
  const [todos, setTodo] = useState<Item[]>([]);
  const [input, setInput] = useState<string>("");

  const handleClickNewTodo = () => {
    // add a new todo item to the list
  };

  const handleToggleTodo = (id: number) => {
    // set a todo as completed or not completed
  };
  return <div>TodoPractise</div>;
};
