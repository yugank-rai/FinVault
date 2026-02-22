import { Link } from 'react-router-dom';
import { PlusCircle } from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  return (
    <nav className="glass-navbar">
      <div className="navbar-logo">
        <h2>💰 FinVault</h2>
      </div>

      <div className="navbar-links">
        <Link to="/" className="nav-link">Dashboard</Link>
        <Link to="/history" className="nav-link">History</Link>
      </div>

      <button onClick={onOpenModal} className="nav-add-btn">
        <PlusCircle size={18} /> Add Expense
      </button>
    </nav>
  );
}