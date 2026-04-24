import { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<string[]>(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const addTodo = () => {
    setTodos([...todos, text]);
    setText("");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="p-4">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2"
      />
      <button type="button" onClick={addTodo} className="ml-2 border p-2">
        追加
      </button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;