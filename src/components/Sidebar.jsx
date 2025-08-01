import { Link, useNavigate } from "react-router-dom";
import { FiLogOut, FiUser, FiHome } from "react-icons/fi";
import { MdOutlineLeaderboard } from "react-icons/md";

function Sidebar() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Placeholder for auth logic
    navigate("/");
  };

  return (
    <aside className="h-screen w-64 bg-blue-600 text-white flex flex-col justify-between shadow-2xl rounded-r-xl overflow-hidden transition-all duration-300 ease-in-out">
      
      {/* Top Logo/Title */}
      <div className="p-6 border-b border-zinc-800">
        <h1 className="text-2xl font-extrabold tracking-wide">Intern Portal</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-8 space-y-4 text-base font-medium">
        <SidebarLink to="/dashboard" icon={<FiHome />} label="Dashboard" />
        <SidebarLink to="/dashboard/leaderboard" icon={<MdOutlineLeaderboard />} label="Leaderboard" />
        <SidebarLink to="/dashboard/profile" icon={<FiUser />} label="Profile" />
      </nav>

      {/* Sign Out */}
      <div className="p-4 border-t border-zinc-800">
        <button
          onClick={handleSignOut}
          className="flex items-center gap-2 p-3 w-full rounded-md hover:bg-white hover:text-black transition-all duration-200 ease-in-out text-left"
        >
          <FiLogOut className="text-xl transition-transform group-hover:scale-110" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}

// Reusable Sidebar Link
function SidebarLink({ to, icon, label }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:text-black hover:bg-white transition-all duration-200 ease-in-out"
    >
      <span className="text-xl transition-transform group-hover:scale-110">{icon}</span>
      {label}
    </Link>
  );
}

export default Sidebar;
