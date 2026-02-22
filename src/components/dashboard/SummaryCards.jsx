export default function SummaryCards({ expenses }) {
  const totalSpent = expenses.reduce((sum, item) => sum + item.amount, 0);
  const activeSubs = expenses.filter(item => item.type === 'Recurring').length;
  const totalTransactions = expenses.length;

  return (
    <div className="summary-container">
      <div className="glass-card summary-card green-glow">
        <span className="card-label">Total Spent</span>
        <p className="card-value">₹ {totalSpent.toLocaleString('en-IN')}</p>
      </div>

      <div className="glass-card summary-card blue-glow">
        <span className="card-label">Transactions</span>
        <p className="card-value">{totalTransactions}</p>
      </div>

      <div className="glass-card summary-card purple-glow">
        <span className="card-label">Active Subs</span>
        <p className="card-value">{activeSubs}</p>
      </div>
    </div>
  );
}