import { useState } from 'react';
import SummaryCards from "../components/dashboard/SummaryCards";
import CategoryPieChart from '../components/dashboard/CategoryPieChart';
import TrendGraph from '../components/dashboard/TrendGraph';
import TimeFilter from '../components/dashboard/TimeFilter';

export default function DashboardPage({ expenses }) {
  const [timeframe, setTimeframe] = useState('All');
  const filteredExpenses = expenses.filter(item => {
    const itemDate = new Date(item.date);
    const now = new Date();
    
    if (timeframe === 'Weekly') {
      const weekAgo = new Date();
      weekAgo.setDate(now.getDate() - 7);
      return itemDate >= weekAgo;
    }
    if (timeframe === 'Monthly') {
      return (
        itemDate.getMonth() === now.getMonth() && 
        itemDate.getFullYear() === now.getFullYear()
      );
    }
    if (timeframe === 'Yearly') {
      return itemDate.getFullYear() === now.getFullYear();
    }
    return true; 
  });

  return (
    <div className="main-content">
      <SummaryCards expenses={filteredExpenses} />
<div style={{ 
  display: 'flex', 
  justifyContent: 'space-between', 
  alignItems: 'center', 
  flexWrap: 'wrap',      
  gap: '15px',          
  margin: '30px 0' 
}}>
  <h3 className="card-label" style={{ 
    margin: 0, 
    fontSize: '1.2rem', 
    color: '#fff', 
    textTransform: 'uppercase', 
    letterSpacing: '1px' 
  }}>
    Spending Analytics
  </h3>
  <TimeFilter activeFilter={timeframe} onFilterChange={setTimeframe} />
</div>
      <div className="charts-grid">
        <div className="glass-card chart-wrapper trend-section">
          <TrendGraph expenses={filteredExpenses} />
        </div>
        <div className="glass-card chart-wrapper category-section">
          <CategoryPieChart expenses={filteredExpenses} />
        </div>
      </div>
    </div>
  );
}