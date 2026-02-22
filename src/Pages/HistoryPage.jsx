import HistoryTable from '../components/History/HistoryTable';
export default function HistoryPage({ expenses, onDelete }) {
  return (
    <div style={{ color: 'white' }}>
      <h2 style={{ marginBottom: '20px' }}>📜 Transaction History</h2>
      <HistoryTable expenses={expenses} onDelete={onDelete} />
    </div>
  );
}