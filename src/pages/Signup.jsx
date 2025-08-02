import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

import { MdEmail, MdLock } from "react-icons/md";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful");
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 text-gray-800 transition-all duration-700 animate-slide-fade-left">
      {/* Signup Form */}
      <div className="md:w-1/2 w-full bg-white flex flex-col justify-center px-6 md:px-10 py-10 md:py-16 shadow-inner">
        <div className="max-w-md w-full mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Create Account</h2>
          </div>

          <form className="space-y-5" onSubmit={handleSignup}>
            <div>
              <label className="text-sm font-medium flex items-center gap-2 mb-1">
                <MdEmail /> Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium flex items-center gap-2 mb-1">
                <MdLock /> Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Create a password"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium flex items-center gap-2 mb-1">
                <MdLock /> Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Confirm your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-sm text-center mt-6">
            Already have an account?{" "}
            <a href="/" className="text-blue-600 hover:underline font-medium">
              Login
            </a>
          </p>
        </div>
      </div>

      {/* Branding */}
      <div className="md:w-1/2 w-full bg-blue-600 text-white p-10 md:p-12 flex flex-col justify-center items-end rounded-t-3xl md:rounded-none md:rounded-l-3xl shadow-lg">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-right animate-typing whitespace-nowrap border-r-4 pr-4 overflow-hidden border-r-white text-white">
          Join Us!
        </h1>
        <p className="text-base md:text-lg text-right opacity-90">
          Become part of the She Can Foundation's journey and grow your career through meaningful internships.
        </p>
      </div>
    </div>
  );
}
