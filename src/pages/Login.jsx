import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

import { FcGoogle } from "react-icons/fc";
import { MdEmail, MdLock } from "react-icons/md";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful");
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Google login successful");
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 text-gray-800 animate-slide-fade-left">
      {/* Branding Section */}
      <div className="md:w-1/2 w-full bg-blue-600 text-white p-10 md:p-12 flex flex-col justify-center items-start rounded-b-3xl md:rounded-none md:rounded-r-3xl shadow-lg">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 animate-typing whitespace-nowrap border-r-4 pr-3 text-left overflow-hidden border-r-white text-white">
          Welcome Intern!
        </h1>
        <p className="text-base md:text-lg opacity-90">
          Internship with Purpose: Connect, contribute, and grow with She Can Foundation.
        </p>
      </div>

      {/* Form Section */}
      <div className="md:w-1/2 w-full bg-white flex flex-col justify-center px-6 md:px-10 py-10 md:py-16 shadow-inner">
        <div className="max-w-md w-full mx-auto">
          <form className="space-y-5" onSubmit={handleEmailLogin}>
            <div className="text-center mb-4">
              <h2 className="text-2xl md:text-3xl font-bold">Login to Dashboard</h2>
            </div>

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
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                Remember me
              </label>
              <a href="#" className="text-blue-600 hover:underline">
                Reset Password!
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition"
            >
              Login
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300" />
            <span className="px-3 text-sm text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300" />
          </div>

          <div className="flex justify-center gap-4">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-3 border border-gray-300 hover:border-gray-500 text-black p-3 rounded-lg transition shadow-sm hover:shadow-md font-medium"
            >
              <FcGoogle className="text-xl" />
              Sign in with Google
            </button>
          </div>

          <p className="text-sm text-center mt-6">
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline font-medium">
              Create Account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
