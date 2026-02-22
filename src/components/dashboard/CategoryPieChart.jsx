import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function CategoryPieChart({ expenses }) {
  if (!expenses || expenses.length === 0) {
    return (
      <div style={styles.emptyContainer}>
        <p>No data to display. Add some expenses!</p>
      </div>
    );
  }

  const categoryData = expenses.reduce((acc, current) => {
    const { category, amount } = current;
    if (!acc[category]) {
      acc[category] = 0;
    }
    acc[category] += amount;
    return acc;
  }, {});

  const data = Object.keys(categoryData).map(key => ({
    name: key,
    value: categoryData[key]
  }));

  const COLORS = ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444'];
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor="middle" 
        dominantBaseline="central" 
        fontSize="12px" 
        fontWeight="700"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <h3 className="card-label" style={{ marginBottom: '20px', textAlign: 'center' }}>
        Spending by Category
      </h3>
      
      <div style={{ flex: 1, width: '100%', minHeight: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={8}
              dataKey="value"
              stroke="none"
              labelLine={false}
              label={renderCustomizedLabel} 
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#111', 
                border: '1px solid #333', 
                borderRadius: '8px', 
                color: 'white' 
              }}
              itemStyle={{ color: 'white' }}
            />
            
            <Legend 
              verticalAlign="bottom" 
              height={36} 
              iconType="circle" 
              wrapperStyle={{ paddingTop: '20px', fontSize: '12px', color: '#888' }} 
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}