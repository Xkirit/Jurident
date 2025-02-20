import LawyerImage from "../assets/LawyerImage.png"; // Replace with your actual image path
import {Link} from "react-router-dom"
import Header from "../components/Header";

function ClientSignUp() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <div className="flex-1 flex items-center justify-center text-white px-4 mt-8">
        {/* Main Container */}
        <div className="flex flex-col md:flex-row items-center md:items-start w-full max-w-3xl space-x-6">
          
          {/* Lawyer Image */}
          <div className="hidden md:block">
            <img src={LawyerImage} alt="Lawyer" className="h-56 object-contain" />
          </div>

          {/* Sign-Up Form */}
          <div className="p-5 rounded-lg shadow-lg w-full max-w-sm">
            <h2 className="text-2xl font-semibold text-yellow-500 text-center">Sign Up</h2>
            <p className="text-center text-gray-300 mt-1 text-sm">
              Become a legal eagle! Login and spread your wings in the courtroom.
            </p>

            {/* Join as Lawyer */}
            <h3 className="text-md font-medium text-yellow-400 text-center mt-3">Join as Client</h3>

           
            <div className="flex justify-center gap-3 mt-3">
              <button className="flex items-center px-3 py-2 bg-gray-200 text-black rounded-lg w-28 justify-center text-sm">
                Apple
              </button>
              <button className="flex items-center px-3 py-2 bg-gray-200 text-black rounded-lg w-28 justify-center text-sm">
                Google
              </button>
            </div>

            
            <div className="flex items-center my-3">
              <div className="flex-1 border-t border-gray-600"></div>
              <p className="px-2 text-gray-400 text-sm">Or</p>
              <div className="flex-1 border-t border-gray-600"></div>
            </div>

         
            <form className="space-y-3">
              <input type="text" placeholder="Username" className="w-full p-2.5 bg-gray-800 text-white rounded-lg focus:outline-none text-sm" />
              <input type="email" placeholder="Email" className="w-full p-2.5 bg-gray-800 text-white rounded-lg focus:outline-none text-sm" />
              <div className="relative">
                <input type="password" placeholder="Password" className="w-full p-2.5 bg-gray-800 text-white rounded-lg focus:outline-none text-sm" />
                <span className="absolute right-4 top-2 text-gray-400 cursor-pointer">👁️</span>
              </div>
              <div className="flex items-center p-2.5 bg-gray-800 text-white rounded-lg text-sm">
                🇮🇳 <span className="ml-2">+91</span>
                <input type="tel" placeholder="Phone Number" className="bg-transparent w-full pl-3 focus:outline-none" />
              </div>
              <button className="w-full bg-blue-600 p-2.5 rounded-lg text-white font-medium hover:bg-blue-700 text-sm">Sign Up</button>
            </form>

           
            <p className="text-center text-gray-400 mt-3 text-sm">
              Already have an account? <span className="text-yellow-500 cursor-pointer"><Link to="ClientSignIn">Sign In</Link> </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientSignUp;