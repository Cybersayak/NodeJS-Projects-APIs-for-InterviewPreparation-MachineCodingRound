import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import FilterBar from './components/FilterBar';
import useLocalStorage from './hooks/useLocalStorage';
import { TodoStats } from './components/TodoList'; // <-- Add this line

function App() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [filter, setFilter] = useState('all');

  // Add Handler
  const handleAddTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  // Toggle Complete
  const handleToggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Delete Todo
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Edit Todo
  const handleEditTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  // Filter Todos
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-gray-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-start p-6 pt-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 ">
             <span className="text-pink-400">🧠</span>My Second Brain
          </h1>
          <p className="text-xl text-gray-400">Organize your life, one task at a time</p>
        </div>

        {/* Input */}
        <TodoInput onAdd={handleAddTodo} />
        
        {/* Filter Bar */}
        <FilterBar filter={filter} setFilter={setFilter} />
        
        {/* Todo List */}
        <TodoList 
          todos={filteredTodos} 
          toggleTodo={handleToggleTodo} 
          deleteTodo={handleDeleteTodo} 
          editTodo={handleEditTodo} 
        />

        {/* Stats */}
        <TodoStats todos={todos} />
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.3s ease-out forwards;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

export default App;