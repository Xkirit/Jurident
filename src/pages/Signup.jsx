import { FaApple, FaGoogle } from "react-icons/fa";
import LawyerImage from "../assets/LawyerImage.png"; // Replace with your actual image path
import Header from "../components/Header";
function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0B26] text-white px-4">
      <Header/>
      {/* Main Container */}
      <div className="flex flex-col md:flex-row items-center md:items-start w-full max-w-3xl space-x-8">
        
        {/* Lawyer Image */}
        <div className="hidden md:block">
          <img src={LawyerImage} alt="Lawyer" className="h-64 object-contain" />
        </div>

        {/* Sign-Up Form */}
        <div className="bg-[#0B0B26] p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-semibold text-yellow-500 text-center">Sign Up</h2>
          <p className="text-center text-gray-300 mt-2">
            Are you ready to become a legal eagle? Login to the app and spread your wings in the courtroom.
          </p>

          {/* Join as Lawyer */}
          <h3 className="text-lg font-medium text-yellow-400 text-center mt-4">Join as Lawyer</h3>

          {/* Social Logins */}
          <div className="flex justify-center gap-4 mt-4">
            <button className="flex items-center px-4 py-2 bg-gray-200 text-black rounded-lg w-36 justify-center">
              <FaApple className="mr-2" /> Apple
            </button>
            <button className="flex items-center px-4 py-2 bg-gray-200 text-black rounded-lg w-36 justify-center">
              <FaGoogle className="mr-2 text-red-500" /> Google
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-1 border-t border-gray-600"></div>
            <p className="px-3 text-gray-400">Or</p>
            <div className="flex-1 border-t border-gray-600"></div>
          </div>

          {/* Input Fields */}
          <form className="space-y-4">
            <input type="text" placeholder="Username" className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none" />
            <input type="email" placeholder="Email" className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none" />
            <div className="relative">
              <input type="password" placeholder="Password" className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none" />
              <span className="absolute right-4 top-3 text-gray-400 cursor-pointer">👁️</span>
            </div>
            <div className="flex items-center p-3 bg-gray-800 text-white rounded-lg">
              🇮🇳 <span className="ml-2">+91</span>
              <input type="tel" placeholder="Phone Number" className="bg-transparent w-full pl-4 focus:outline-none" />
            </div>
            <button className="w-full bg-blue-600 p-3 rounded-lg text-white font-medium hover:bg-blue-700">Sign Up</button>
          </form>

          {/* Sign-In Redirect */}
          <p className="text-center text-gray-400 mt-4">
            Do you have an account? <span className="text-yellow-500 cursor-pointer">Sign In</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
