import { useRef, useState } from "react";
import TodoListItem from "./TodoListItem";

const list = [
  "fare la spesa",
  "portare a spasso il cane",
  "annaffiare il basilico",
];

export default function Todolist() {
  const [todo, setTodo] = useState(list);
  const inputRef = useRef(null);

  function handleAdd() {
    const listItem = inputRef.current.value;

    setTodo((prev) => {
      return [...prev, listItem];
    });

    inputRef.current.value = "";
  }

  function handleReset() {
    setTodo([]);
  }

  function handleRemove(item) {
    setTodo(todo.filter((task) => task !== item));
  }

  return (
    <div>
      <ul>
        {todo.map((item) => {
          return <TodoListItem item={item} handleRemove={handleRemove} />;
        })}
      </ul>
      <input type="text" name="list_item" ref={inputRef} />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
      <button type="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
