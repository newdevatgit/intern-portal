export default function Profile() {
  const intern = {
    name: "xyz",
    email: "email@example.com",
    referralCode: "12345",
    joinedDate: "2024-07-15",
    totalDonations: 1500,
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6"> Intern Profile</h1>

        <div className="space-y-6">
          <ProfileRow label="Full Name" value={intern.name} />
          <ProfileRow label="Email" value={intern.email} />
          <ProfileRow label="Referral Code" value={intern.referralCode} />
          <ProfileRow label="Date Joined" value={intern.joinedDate} />
          <ProfileRow label="Total Donations" value={`₹${intern.totalDonations}`} />
        </div>

        <div className="mt-8">
          <button className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

// 🔁 Reusable field row
function ProfileRow({ label, value }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-50 px-4 py-3 rounded-xl">
      <span className="text-sm font-medium text-gray-500">{label}</span>
      <span className="text-base font-semibold text-blue-800">{value}</span>
    </div>
  );
}
