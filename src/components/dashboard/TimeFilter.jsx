export default function TimeFilter({ activeFilter, onFilterChange }) {
  const options = ['Weekly', 'Monthly', 'Yearly', 'All'];

  return (
    <div className="filter-group">
      {options.map((opt) => (
        <button
          key={opt}
          className={`filter-btn ${activeFilter === opt ? 'active' : ''}`}
          onClick={() => onFilterChange(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}