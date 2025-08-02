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
    <aside className="min-h-screen w-50 bg-gray-100 text-black flex flex-col justify-between shadow-2xl overflow-hidden transition-all duration-300 ease-in-out">
      
      {/* Top Logo/Title */}
      <div className="p-4 bg-gray-100 rounded-3xl">
        <h1 className="text-3xl underline font-extrabold tracking-wide">Intern Portal</h1>
        <p className="text-sm text-center underline text-gray-500">She Can Foundation</p>
      </div>

      {/* Navigation Links */}
      <nav className="text-base font-medium flex-1 px-4 py-6 space-y-1">
        <SidebarLink to="/dashboard" icon={<FiHome />} label="Dashboard" />
        <SidebarLink to="/dashboard/leaderboard" icon={<MdOutlineLeaderboard />} label="Leaderboard" />
        <SidebarLink to="/dashboard/profile" icon={<FiUser />} label="Profile" />
      </nav>

      {/* Sign Out
      <div className="p-4 border-t border-zinc-800">
        <button
          onClick={handleSignOut}
          className="flex items-center gap-2 p-3 w-full rounded-md hover:bg-white hover:text-black transition-all duration-200 ease-in-out text-left"
        >
          <FiLogOut className="text-xl transition-transform group-hover:scale-110" />
          Sign Out
        </button>
      </div> */}
    </aside>
  );
}

// Reusable Sidebar Link
function SidebarLink({ to, icon, label }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 px-4 py-3 rounded-3xl hover:text-white hover:bg-blue-600 transition-all duration-200 ease-in-out"
    >
      <span className="text-xl transition-transform group-hover:scale-110">{icon}</span>
      {label}
    </Link>
  );
}

export default Sidebar;
