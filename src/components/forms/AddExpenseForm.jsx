import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
export default function AddExpenseForm({ onAdd, closeModal }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Tech Gear');
  const [type, setType] = useState('One-Time');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]); 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount) return; 
    const newExpense = {
      id: uuidv4(),
      name,
      amount: parseFloat(amount),
      category,
      type,
      date
    };

    onAdd(newExpense); 
    closeModal();     
  };
  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.inputGroup}>
        <label>Expense Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required style={styles.input} placeholder="e.g., Mechanical Keyboard" />
      </div>

      <div style={styles.inputGroup}>
        <label>Amount (₹)</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required style={styles.input} placeholder="e.g., 2500" />
      </div>

      <div style={styles.inputGroup}>
        <label>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} style={styles.input}>
          <option value="Tech Gear">Tech Gear</option>
          <option value="Software">Software</option>
          <option value="Sports gear">Sports</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Laundry">Laundry</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Health">Health</option>
          <option value="Education">Education</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div style={styles.inputGroup}>
        <label>Type</label>
        <select value={type} onChange={(e) => setType(e.target.value)} style={styles.input}>
          <option value="One-Time">One-Time Purchase</option>
          <option value="Recurring">Recurring Subscription</option>
        </select>
      </div>

      <div style={styles.inputGroup}>
        <label>Date</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={styles.input} />
      </div>

      <button type="submit" style={styles.submitBtn}>Save Expense</button>
    </form>
  );
}
const styles = {
  form: { display: 'flex', flexDirection: 'column', gap: '15px' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '6px', color: '#b0b0b0', fontSize: '14px' },
  input: { padding: '10px', borderRadius: '6px', border: '1px solid #444', backgroundColor: '#333', color: 'white', outline: 'none' },
  submitBtn: { padding: '12px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px' }
};