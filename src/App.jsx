import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <nav className="bg-blue-600 text-white px-6 py-4 flex gap-4 font-medium shadow-md">
        <Link to="/" className="hover:underline">Login</Link>
        <Link to="/signup" className="hover:underline">Signup</Link>
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
