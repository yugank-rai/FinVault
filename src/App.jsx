import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './Pages/DashboardPage';
import HistoryPage from './Pages/HistoryPage';
import Navbar from './components/Layout/Navbar';
import ModalWrapper from './components/Layout/ModalWrapper';
import AddExpenseForm from './components/forms/AddExpenseForm';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [expenses, setExpenses] = useState(() => {
    const savedData = localStorage.getItem('yugvault_expenses');
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem('yugvault_expenses', JSON.stringify(expenses));
  }, [expenses]);

  const handleAddExpense = (newExpense) => {
    setExpenses([newExpense, ...expenses]);
  };

  const handleDeleteExpense = (idToRemove) => {
    const updatedExpenses = expenses.filter(expense => expense.id !== idToRemove);
    setExpenses(updatedExpenses);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar onOpenModal={() => setIsModalOpen(true)} />
        
        <div className="main-content">
          <Routes>
            <Route path="/" element={<DashboardPage expenses={expenses} />} />
            <Route path="/history" element={
              <HistoryPage expenses={expenses} onDelete={handleDeleteExpense} />
            } />
          </Routes>
        </div>

        <ModalWrapper isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2 style={{ marginTop: 0, marginBottom: '20px', color: 'white' }}>Add New Expense</h2>
          <AddExpenseForm onAdd={handleAddExpense} closeModal={() => setIsModalOpen(false)} />
        </ModalWrapper>
      </div>
    </Router>
  );
}

export default App;