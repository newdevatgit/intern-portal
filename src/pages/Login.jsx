import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaApple } from "react-icons/fa";
import { MdEmail, MdLock } from "react-icons/md";
import { FaHandsPraying } from "react-icons/fa6";

export default function Login() {
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800 animate-slide-fade-left">
      {/* Left Side - Branding */}

      <div className="w-1/2 bg-blue-600 text-white p-12 flex flex-col justify-center rounded shadow-lg">
        {/* <div className="flex justify-center">
        <FaHandsPraying className="justify-center text-7xl animate-typing"/>
       </div>
        */}
        <h1 className="text-7xl text-left font-extrabold mb-4 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-3 text-white ">
          Welcome Intern!
        </h1>
        <p className="text-lg text-left opacity-90">
          Internship with Purpose: Connect, contribute, and grow with She Can
          Foundation.
        </p>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-1/2 bg-white flex flex-col justify-center px-10 py-16 rounded-l-3xl shadow-inner">
        <div className="max-w-md w-full mx-auto">
          {/* Logo (replace with your logo if needed) */}
          <div className="text-center mb-6">
            {/* <img src="/logo.png" alt="Logo" className="mx-auto w-14 h-14" /> */}
            {/* <h2 className="text-3xl font-semibold mt-2">Hello! Welcome back</h2> */}
          </div>

          {/* Login Form */}
          <form className="space-y-5">
            <div>
              <div className="text-center mb-4">
                <h2 className="text-3xl font-bold">Login to Dashboard</h2>
              </div>
              <label className="text-sm font-medium flex items-center gap-2 mb-1">
                <MdEmail /> Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label className="text-sm font-medium flex items-center gap-2 mb-1">
                <MdLock /> Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
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

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300" />
            <span className="px-3 text-sm text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300" />
          </div>

          {/* Social Buttons */}
          <div className="flex justify-center gap-4">
            <button
              type="button"
              // onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-3 border border-gray-300 hover:border-gray-500 text-black p-3 rounded-lg transition shadow-sm hover:shadow-md font-medium"
            >
              <FcGoogle className="text-xl" />
              Sign in with Google
            </button>
          </div>

          <p className="text-sm text-center mt-6">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-blue-600 hover:underline font-medium"
            >
              Create Account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
