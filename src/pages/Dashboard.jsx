export default function Dashboard() {
  const internData = {
    name: "Arvind Singh",
    referralCode: "arvind2025",
    donations: 1250, // dummy amount
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">🎓 Intern Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-blue-100 p-4 rounded-md text-blue-900">
            <p className="font-semibold">Intern Name:</p>
            <p>{internData.name}</p>
          </div>

          <div className="bg-green-100 p-4 rounded-md text-green-900">
            <p className="font-semibold">Referral Code:</p>
            <p>{internData.referralCode}</p>
          </div>

          <div className="bg-yellow-100 p-4 rounded-md text-yellow-900 col-span-1 sm:col-span-2">
            <p className="font-semibold">Total Donations Raised:</p>
            <p>₹{internData.donations}</p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4">🏆 Rewards / Unlockables</h2>
        <ul className="list-disc pl-5 text-gray-800">
          <li>🎉 Bronze Badge – ₹500 Raised</li>
          <li>🥈 Silver Badge – ₹1000 Raised</li>
          <li>🏅 Gold Badge – ₹2000 Raised</li>
        </ul>
      </div>
    </div>
  );
}
