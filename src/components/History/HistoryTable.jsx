import { Trash2 } from 'lucide-react';

export default function HistoryTable({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return (
      <div className="glass-card" style={{ textAlign: 'center', padding: '60px', color: '#888' }}>
        <p>No expenses logged yet. Click "Add Expense" to get started!</p>
      </div>
    );
  }

  return (
    <div className="table-wrapper" style={{ overflowX: 'auto', marginTop: '20px' }}>
      <table className="history-table">
        <thead>
          <tr>
            <th style={headerStyle}>Date</th>
            <th style={headerStyle}>Name</th>
            <th style={headerStyle}>Category</th>
            <th style={headerStyle}>Type</th>
            <th style={headerStyle}>Amount</th>
            <th style={{ ...headerStyle, textAlign: 'center' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((item) => (
            <tr key={item.id}>
              <td>{item.date}</td>
              <td style={{ fontWeight: '600' }}>{item.name}</td>
              <td>
                <span className="category-badge">{item.category}</span>
              </td>
              <td style={{ color: '#888', fontSize: '13px' }}>{item.type}</td>
              <td style={{ fontWeight: '800', color: '#10b981' }}>
                ₹ {item.amount.toLocaleString('en-IN')}
              </td>
              <td style={{ textAlign: 'center' }}>
                <button 
                  onClick={() => onDelete(item.id)} 
                  className="delete-btn"
                  title="Delete Transaction"
                >
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
const headerStyle = { 
  padding: '12px 18px', 
  color: '#666', 
  fontWeight: '700', 
  fontSize: '12px', 
  textTransform: 'uppercase', 
  letterSpacing: '1px' 
};