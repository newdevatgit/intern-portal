import { useEffect, useState } from "react";
import { db } from "../firebase"; // make sure this path matches your setup
import { collection, getDocs } from "firebase/firestore";

export default function Leaderboard() {
  const [interns, setInterns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInterns = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "intern_leaderboard"));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const sorted = data.sort((a, b) => b.donations - a.donations);
        setInterns(sorted);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
        setLoading(false);
      }
    };

    fetchInterns();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-black p-4 sm:p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow p-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          🏆 Leaderboard
        </h1>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="bg-blue-100 text-blue-700">
                <tr>
                  <th className="py-2 px-4">Rank</th>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Referral Code</th>
                  <th className="py-2 px-4">Donations (₹)</th>
                </tr>
              </thead>
              <tbody>
                {interns.map((intern, index) => (
                  <tr key={intern.id} className="border-b">
                    <td className="py-2 px-4 font-semibold text-center">{index + 1}</td>
                    <td className="py-2 px-4">{intern.name}</td>
                    <td className="py-2 px-4 text-sm text-gray-500">{intern.referralCode}</td>
                    <td className="py-2 px-4 text-blue-700 font-bold">₹{intern.donations}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
