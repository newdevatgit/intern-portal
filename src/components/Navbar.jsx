import { Link, useNavigate } from "react-router-dom";

export default function DashboardNavbar() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Add Firebase/logic later if needed
    navigate("/"); // Redirect to login
  };

  return (
    <nav className="bg-rose-100 text-rose-800 shadow-sm py-4 px-6">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">She Can Intern Portal</h1>

        <div className="flex gap-4">
          <Link
            to="/dashboard/profile"
            className="px-4 py-1 bg-white text-rose-800 rounded-md border hover:bg-rose-50"
          >
            Profile
          </Link>
          <button
            onClick={handleSignOut}
            className="px-4 py-1 bg-rose-600 text-white rounded-md hover:bg-rose-700"
          >
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
}
