import { useState } from "react";

function TodoInput({ onAdd }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    onAdd(input.trim());
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className="w-full max-w-2xl mb-8">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
        <div className="relative bg-gray-800 rounded-2xl p-6 border border-gray-700">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                className="w-full bg-gray-900/50 text-gray-100 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 rounded-xl px-6 py-4 text-lg transition-all duration-300 placeholder-gray-400 outline-none backdrop-blur-sm"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="What needs to be done? ✨"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 pointer-events-none opacity-0 focus-within:opacity-100 transition-opacity duration-300"></div>
            </div>
            <button
              onClick={handleSubmit}
              disabled={!input.trim()}
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              <span className="flex items-center gap-2">
                <span className="text-xl">➕</span>
                Add Task
              </span>
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoInput;
