function FilterBar({ filter, setFilter }) {
  const filters = [
    { label: "All", value: "all", icon: "📋" },
    { label: "Active", value: "active", icon: "⚡" },
    { label: "Completed", value: "completed", icon: "✅" },
  ];

  return (
    <div className="flex justify-center gap-2 mb-8 bg-gray-800/50 p-2 rounded-2xl backdrop-blur-sm border border-gray-700/50">
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => setFilter(f.value)}
          className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
            filter === f.value
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
              : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white"
          }`}
        >
          <span className="flex items-center gap-2">
            <span className="text-lg">{f.icon}</span>
            {f.label}
          </span>
          {filter === f.value && (
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 animate-pulse"></div>
          )}
        </button>
      ))}
    </div>
  );
}
export default FilterBar;
