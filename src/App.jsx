import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";

function Layout() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Sidebar and Topbar (Dashboard routes only) */}
      {isDashboard && (
        <>
          {/* Mobile Topbar */}
          <div className="md:hidden fixed top-0 left-0 right-0 z-30 bg-white shadow flex justify-between items-center px-4 py-3 border-b">
            <h1 className="text-lg font-bold text-blue-600">Intern Portal</h1>
            <button
              className="text-2xl"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              &#9776;
            </button>
          </div>

          {/* Sidebar (mobile + desktop) */}
          <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        </>
      )}

      {/* Main Page Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isDashboard ? "pt-14 md:pt-0 md:pl-56" : ""
        }`}
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/dashboard/profile"
            element={<div className="p-10 text-2xl">Profile Page</div>}
          />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
