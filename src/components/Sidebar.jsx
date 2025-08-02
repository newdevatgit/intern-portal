import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiLogOut, FiUser, FiHome, FiMenu } from "react-icons/fi";
import { MdOutlineLeaderboard } from "react-icons/md";

function Sidebar({ open, setOpen }) {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/");
    setOpen(false); // close on mobile
  };

  // Close on route change (optional)
  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, [setOpen]);

  return (
    <>
      {/* Desktop Sidebar (original design) */}
      <aside className="hidden md:flex fixed top-0 left-0 h-screen w-56 bg-white text-black flex-col justify-between shadow-lg z-40">

        {/* Top Logo/Title */}
        <div className="p-4 bg-blue-600 text-white text-center">
          <h1 className="text-2xl text-center font-extrabold tracking-wide">Intern Portal</h1>
          <p className="text-sm text-center underline text-gray-100">She Can Foundation</p>
        </div>

        {/* Navigation Links */}
        <nav className="text-base font-medium flex-1 px-4 py-6 space-y-1">
          <SidebarLink to="/dashboard" icon={<FiHome />} label="Dashboard" />
          <SidebarLink to="/dashboard/leaderboard" icon={<MdOutlineLeaderboard />} label="Leaderboard" />
          <SidebarLink to="/dashboard/profile" icon={<FiUser />} label="Profile" />
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      {open && (
        <div className="fixed z-50 top-0 left-0 h-screen w-64 bg-gray-100 text-black shadow-2xl flex flex-col justify-between md:hidden">
          {/* Top bar */}
          <div className="p-4 border-b">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-xl font-extrabold tracking-wide text-blue-600">Intern Portal</h1>
                <p className="text-xs text-gray-500">She Can Foundation</p>
              </div>
              <button onClick={() => setOpen(false)} className="text-2xl">
                ✕
              </button>
            </div>
          </div>

          {/* Links */}
          <nav className="flex-1 px-4 py-6 space-y-2 font-medium">
            <SidebarLink to="/dashboard" icon={<FiHome />} label="Dashboard" onClick={() => setOpen(false)} />
            <SidebarLink to="/dashboard/leaderboard" icon={<MdOutlineLeaderboard />} label="Leaderboard" onClick={() => setOpen(false)} />
            <SidebarLink to="/dashboard/profile" icon={<FiUser />} label="Profile" onClick={() => setOpen(false)} />
          </nav>

          {/* Sign Out Button */}
          <div className="p-4 border-t">
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 w-full p-3 rounded-md hover:bg-blue-600 hover:text-white transition"
            >
              <FiLogOut className="text-xl" />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// 🔁 Sidebar Link Component
function SidebarLink({ to, icon, label, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center gap-3 px-4 py-3 rounded-3xl hover:bg-blue-600 hover:text-white transition-all duration-200"
    >
      <span className="text-xl">{icon}</span>
      {label}
    </Link>
  );
}

export default Sidebar;
