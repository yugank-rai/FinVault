import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function TrendGraph({ expenses }) {
  if (!expenses || expenses.length === 0) {
    return (
      <div style={styles.emptyContainer}>
        <p>No data for the trend graph yet.</p>
      </div>
    );
  }
  const groupedData = expenses.reduce((acc, current) => {
    const { date, amount } = current;
    if (!acc[date]) {
      acc[date] = 0;
    }
    acc[date] += amount;
    return acc;
  }, {});
  const data = Object.keys(groupedData)
    .map(date => ({ date, amount: groupedData[date] }))
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Spending Trend</h3>
      
      <div style={{ height: 300, width: '100%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
            
            <XAxis dataKey="date" stroke="#888" tick={{ fill: '#888' }} />
            <YAxis stroke="#888" tick={{ fill: '#888' }} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#2a2a2a', border: 'none', borderRadius: '8px', color: 'white' }}
              itemStyle={{ color: '#3b82f6', fontWeight: 'bold' }}
              cursor={{ fill: '#333' }} 
            />
            <Bar dataKey="amount" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
const styles = {
  container: {
    backgroundColor: '#1e1e1e',
    padding: '20px',
    borderRadius: '10px',
    flex: 2,
    minWidth: '400px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
  },
  emptyContainer: {
    backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px', flex: 2, minWidth: '400px', textAlign: 'center', color: '#888', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px'
  },
  title: {
    color: '#a0a0a0', fontSize: '14px', fontWeight: '600', marginBottom: '20px', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '1px'
  }
};