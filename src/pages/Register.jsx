import { useState } from "react";
import { Link } from "react-router-dom";
import LawyerImage from "../assets/LawyerImage.png";
import Header from '../components/Header';

function Register() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [message, setMessage] = useState("");

  // Function to handle selection
  const handleSelection = (role) => {
    setSelectedRole(role);
    setMessage(`Selected as ${role}`);
    setTimeout(() => setMessage(""), 2000); // Hide message after 2 seconds
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex justify-center items-center text-white p-4 sm:pt-20 relative z-0">
        {/* Pop-up Message */}
        {message && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg z-50">
            {message}
          </div>
        )}

        {/* Container for Image and Text */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 w-full max-w-4xl">
          
          {/* Lawyer Image - Larger sizes for all screens */}
          <div className="flex-shrink-0">
            <img 
              src={LawyerImage} 
              alt="lawyer" 
              className="w-auto h-48 sm:h-64 md:h-72 lg:h-96 object-contain" 
            />
          </div>

          {/* Text and Buttons */}
          <div className="flex flex-col items-center w-full sm:w-auto">
            <div className="text-2xl sm:text-3xl text-yellow-400 mb-6 text-center">Welcome to Jurident!</div>
            
            {/* Selection Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 w-full sm:w-auto">
              <button
                className={`px-6 py-2 rounded w-full sm:w-auto ${
                  selectedRole === "Lawyer/Student" 
                    ? "bg-orange-500 text-white" 
                    : "bg-white text-black"
                }`}
                onClick={() => handleSelection("Lawyer/Student")}
              >
                Lawyer / Student
              </button>
              <button
                className={`px-6 py-2 rounded w-full sm:w-auto ${
                  selectedRole === "Client" 
                    ? "bg-orange-500 text-white" 
                    : "bg-white text-black"
                }`}
                onClick={() => handleSelection("Client")}
              >
                Client
              </button>
            </div>

            {/* Login and Sign-Up Buttons */}
            <div className="flex flex-col items-center gap-4 w-full sm:w-auto"> 
              <button 
                className={`px-6 py-2 rounded bg-blue-500 text-white w-full sm:w-40 ${
                  !selectedRole && "opacity-50 cursor-not-allowed"
                }`} 
                disabled={!selectedRole}
              >
                <Link to={selectedRole === "Lawyer/Student" ? "/LawyerSignIn" : selectedRole === "Client" ? "/ClientSignIn" : "#"}>
                  Login
                </Link>
              </button>
              <button 
                className={`px-6 py-2 rounded bg-white text-black w-full sm:w-40 ${
                  !selectedRole && "opacity-50 cursor-not-allowed"
                }`} 
                disabled={!selectedRole}
              >
                <Link to={selectedRole === "Lawyer/Student" ? "/LawyerSignUp" : selectedRole === "Client" ? "/ClientSignUp" : "#"}>
                  Sign Up
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

