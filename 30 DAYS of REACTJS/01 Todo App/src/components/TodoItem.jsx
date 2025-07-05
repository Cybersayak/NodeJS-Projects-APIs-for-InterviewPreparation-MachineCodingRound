
import { useState } from "react";
function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  const handleEditSubmit = () => {
    const trimmed = editValue.trim();
    if (trimmed === "") return;
    editTodo(todo.id, trimmed);
    setIsEditing(false);
  };

  const handleEditKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEditSubmit();
    }
    if (e.key === 'Escape') {
      setIsEditing(false);
      setEditValue(todo.text);
    }
  };

  return (
    <li className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className={`relative flex items-center justify-between p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border transition-all duration-300 ${
        todo.completed 
          ? "border-green-500/30 bg-green-900/10" 
          : "border-gray-700/50 group-hover:border-gray-600/50"
      }`}>
        <div className="flex items-center gap-4 flex-1">
          <button
            onClick={() => toggleTodo(todo.id)}
            className={`relative w-6 h-6 rounded-full border-2 transition-all duration-300 ${
              todo.completed
                ? "bg-green-500 border-green-500"
                : "border-gray-500 hover:border-blue-500"
            }`}
          >
            {todo.completed && (
              <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold">
                ✓
              </span>
            )}
          </button>

          {isEditing ? (
            <div className="flex-1 flex gap-3">
              <input
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                onKeyPress={handleEditKeyPress}
                className="flex-1 bg-gray-900/50 text-gray-100 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 rounded-xl px-4 py-2 transition-all duration-300 outline-none"
                autoFocus
              />
              <button
                onClick={handleEditSubmit}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                💾 Save
              </button>
              <button
                onClick={() => {
                  setIsEditing(false);
                  setEditValue(todo.text);
                }}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
              >
                ❌ Cancel
              </button>
            </div>
          ) : (
            <span
              className={`flex-1 cursor-pointer text-lg transition-all duration-300 ${
                todo.completed 
                  ? "line-through text-gray-400" 
                  : "text-gray-100 hover:text-blue-400"
              }`}
              onDoubleClick={() => setIsEditing(true)}
              title="Double-click to edit"
            >
              {todo.text}
            </span>
          )}
        </div>

        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              title="Edit"
            >
              ✏️ Edit
            </button>
          )}
          <button
            onClick={() => deleteTodo(todo.id)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            title="Delete"
          >
            🗑️ Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default TodoItem;


