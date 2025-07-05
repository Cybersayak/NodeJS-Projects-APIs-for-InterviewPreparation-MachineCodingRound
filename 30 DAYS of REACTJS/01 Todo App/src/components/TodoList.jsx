import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-8xl mb-4">📝</div>
        <p className="text-2xl text-gray-400 mb-2">No Plans Yet!</p>
        <p className="text-gray-500">Add your first Plan/Task/Goal above to get started</p>
      </div>
    );
  }

  return (
    <ul className="w-full max-w-2xl space-y-4">
      {todos.map((todo, index) => (
        <div
          key={todo.id}
          className="animate-slideIn"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <TodoItem 
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        </div>
      ))}
    </ul>
  );
}

// Stats Component
function TodoStats({ todos }) {
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;
  const completionRate = totalTodos > 0 ? (completedTodos / totalTodos) * 100 : 0;

  return (
    <div className="w-full max-w-2xl mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50">
        <div className="text-3xl font-bold text-blue-400">{totalTodos}</div>
        <div className="text-sm text-gray-400">Total Tasks</div>
      </div>
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50">
        <div className="text-3xl font-bold text-green-400">{completedTodos}</div>
        <div className="text-sm text-gray-400">Completed</div>
      </div>
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50">
        <div className="text-3xl font-bold text-yellow-400">{activeTodos}</div>
        <div className="text-sm text-gray-400">Active</div>
      </div>
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50">
        <div className="text-3xl font-bold text-purple-400">{Math.round(completionRate)}%</div>
        <div className="text-sm text-gray-400">Complete</div>
      </div>
    </div>
  );
}

// Export both components
export default TodoList;
export { TodoStats };