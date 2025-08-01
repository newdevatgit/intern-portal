export default function Dashboard() {
  const intern = {
    name: "Arvind Singh",
    referralCode: "arvind2025",
    donations: 1250,
  };

  return (
    <div className="min-h-screen bg-gray-200 p-4">
      {/* Hero Greeting */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10 mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
          Welcome back, {intern.name}!
        </h1>
        <p className="text-gray-600">
          Your referral code is <span className="font-semibold text-gray-800">{intern.referralCode}</span>
        </p>
      </div>

      {/* Stats Grid */}
      <div className="max-w-4xl mx-auto rounded-2xl shadow-lg grid gap-6 grid-cols-1 sm:grid-cols-3 mb-4">
        <Card title="Donations Raised" value={`₹${intern.donations}`} color="yellow" />
        <Card title="Bronze Badge" subtitle="Unlocked at ₹500" color="yellow" />
        <Card title="Silver Badge" subtitle="Unlocked at ₹1000" color="yellow" />
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">🏆 Unlockables</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
          <li>Gold Badge – ₹2000 Raised</li>
          <li>Platinum Badge – ₹5000 Raised</li>
          <li>Diamond Badge – ₹10,000 Raised</li>
        </ul>
        <button className="mt-2 bg-pink-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-pink-600 transition">
          View Rewards
        </button>
      </div>
    </div>
  );
}

/** Reusable Stat Card */
function Card({ title, value, subtitle = "", color }) {
  const colorMap = {
    pink: "bg-pink-50 text-pink-800",
    teal: "bg-teal-50 text-teal-800",
    yellow: "bg-yellow-50 text-yellow-800",
  };

  return (
    <div className={`${colorMap[color]} rounded-xl p-6 shadow`}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value || subtitle}</p>
    </div>
  );
}
