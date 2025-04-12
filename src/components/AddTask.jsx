import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-500 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="border border-slate-400 bg-white outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      ></input>

      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-slate-400 bg-white outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></input>

      <button
        className="bg-slate-700 text-white px-4 py-2 rounded-md font-medium cursor-pointer"
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            setTitle("");
            setDescription("");
            return alert("Preencha o título e a descrição da tarefa.");
          }

          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicionar tarefa
      </button>
    </div>
  );
}

export default AddTask;
