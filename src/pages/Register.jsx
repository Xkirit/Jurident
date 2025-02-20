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
      <div className="flex justify-center items-center text-white pt-20 flex-col">
        
        {/* Pop-up Message */}
        {message && (
          <div className="bg-green-500 text-white px-4 py-2 rounded-lg mb-4">
            {message}
          </div>
        )}

        {/* Container for Image and Text */}
        <div className="flex flex-row items-center justify-center space-x-10 w-4/5">
          
          {/* Lawyer Image */}
          <div className="flex-shrink-0">
            <img src={LawyerImage} alt="lawyer" className="w-30 h-66 object-contain" />
          </div>

          {/* Text and Buttons */}
          <div className="flex flex-col items-center">
            <div className="text-3xl text-yellow-400 mb-6">Welcome to Jurident!</div>
            
            {/* Selection Buttons */}
            <div className="flex flex-row items-center space-x-4 mb-4">
              <button
                className={`px-6 py-2 rounded ${selectedRole === "Lawyer/Student" ? "bg-orange-500 text-white" : "bg-white text-black"}`}
                onClick={() => handleSelection("Lawyer/Student")}
              >
                Lawyer / Student
              </button>
              <button
                className={`px-6 py-2 rounded ${selectedRole === "Client" ? "bg-orange-500 text-white" : "bg-white text-black"}`}
                onClick={() => handleSelection("Client")}
              >
                Client
              </button>
            </div>

            {/* Login and Sign-Up Buttons */}
            <div className="flex flex-col items-center space-y-4"> 
              <button 
                className={`px-6 py-2 rounded bg-blue-500 text-white w-40 ${!selectedRole && "opacity-50 cursor-not-allowed"}`} 
                disabled={!selectedRole}
              >
                <Link to={selectedRole === "Lawyer/Student" ? "/LawyerSignIn" : selectedRole === "Client" ? "/ClientSignIn" : "#"}>
                  Login
                </Link>
              </button>
              <button 
                className={`px-6 py-2 rounded bg-white text-black w-40 ${!selectedRole && "opacity-50 cursor-not-allowed"}`} 
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

