import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  return (
    <ul className="space-y-4 p-6 bg-slate-500 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-700 text-left text-white p-2 rounded-md font-bold w-full cursor-pointer ${
              task.isCompleted ? "line-through" : ""
            }`}
          >
            {task.title}
          </button>

          <button className="bg-slate-700 p-2 rounded-md text-white cursor-pointer">
            <ChevronRightIcon />
          </button>

          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-slate-700 p-2 rounded-md text-white cursor-pointer"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
