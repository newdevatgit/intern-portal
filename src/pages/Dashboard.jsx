import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const intern = {
    name: "Arvind Singh",
    referralCode: "arvind2025",
    donations: 1250,
  };

  const handleSignOut = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black p-4 sm:p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-lg sm:text-xl font-bold pl-1 sm:pl-4">
          Welcome back, <span className="text-blue-600">{intern.name}</span> 👋
        </h2>

        <button
          onClick={handleSignOut}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-full shadow hover:bg-blue-700 transition"
        >
          <FiLogOut className="text-lg" />
          Sign Out
        </button>
      </div>

      {/* Main Card Container */}
      <div className="max-w-6xl mx-auto bg-white shadow rounded-3xl p-4 sm:p-8 space-y-10">
        {/* Referral Code */}
        <section>
          <p className="text-base text-center bg-gray-100 p-3 rounded-3xl">
            Referral Code:{" "}
            <span className="text-black font-bold">{intern.referralCode}</span>
          </p>
        </section>

        {/* Stats Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-100 rounded-3xl p-6 text-center sm:text-left">
            <h3 className="text-sm font-semibold text-blue-700">Donations Raised</h3>
            <p className="text-2xl font-bold mt-2 text-blue-800">₹{intern.donations}</p>
          </div>
          <div className="bg-gray-100 rounded-3xl p-6 text-center">
            <h3 className="text-sm bg-white text-center rounded-3xl p-2 font-bold text-blue-700">
              Bronze Badge
            </h3>
            <p className="text-base mt-2 font-medium">Unlocked at ₹500</p>
          </div>
          <div className="bg-gray-100 rounded-3xl p-6 text-center">
            <h3 className="text-sm bg-white text-center rounded-3xl p-2 font-bold text-blue-700">
              Silver Badge
            </h3>
            <p className="text-base mt-2 font-medium">Unlocked at ₹1000</p>
          </div>
        </section>

        {/* Rewards Section */}
        <section className="bg-gray-100 rounded-2xl p-6 sm:p-8 space-y-4">
          <h3 className="text-xl font-bold text-black">🎖️ Unlock More Rewards</h3>

          <p className="text-base max-w-2xl">
            Raise more and unlock exclusive badges as you grow during your internship journey with She Can Foundation.
          </p>

          <ul className="list-disc list-inside text-base space-y-1">
            <li>🥉 Gold Badge – ₹2000 Raised</li>
            <li>🥈 Platinum Badge – ₹5000 Raised</li>
            <li>🏅 Diamond Badge – ₹10,000 Raised</li>
          </ul>

          <div className="text-center sm:text-left">
            <button className="mt-4 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow">
              View Full Rewards
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
